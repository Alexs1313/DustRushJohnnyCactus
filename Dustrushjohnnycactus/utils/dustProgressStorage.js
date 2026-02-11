import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'DUST_RUSH_PROGRESS_V1';

const defaultState = {
  boards: 0,
  hats: 0,
  completedLevels: {},
  lastSelectedLevel: 1,

  townFixed: 0,
};

export async function loadDustProgress() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch {
    return defaultState;
  }
}

export async function saveDustProgress(nextState) {
  await AsyncStorage.setItem(KEY, JSON.stringify(nextState));
}

// уже есть у тебя:
export async function markLevelCompletedAndReward(levelId) {
  const state = await loadDustProgress();
  const already = !!state.completedLevels?.[String(levelId)];

  if (!already) {
    const completedLevels = { ...(state.completedLevels || {}) };
    completedLevels[String(levelId)] = true;

    const next = {
      ...state,
      boards: (state.boards || 0) + 15,
      hats: (state.hats || 0) + 1,
      completedLevels,
    };

    await saveDustProgress(next);
    return { next, rewarded: true };
  }

  return { next: state, rewarded: false };
}

export async function setLastSelectedLevel(levelId) {
  const state = await loadDustProgress();
  const next = { ...state, lastSelectedLevel: levelId };
  await saveDustProgress(next);
  return next;
}

export async function repairNextTownBuilding(cost = 30) {
  const state = await loadDustProgress();
  const fixed = Number(state.townFixed || 0);

  if (fixed >= 4) {
    return { ok: false, reason: 'ALL_FIXED', next: state };
  }

  const boards = Number(state.boards || 0);
  if (boards < cost) {
    return { ok: false, reason: 'NOT_ENOUGH', next: state };
  }

  const next = {
    ...state,
    boards: boards - cost,
    townFixed: fixed + 1,
  };

  await saveDustProgress(next);
  return { ok: true, next };
}
