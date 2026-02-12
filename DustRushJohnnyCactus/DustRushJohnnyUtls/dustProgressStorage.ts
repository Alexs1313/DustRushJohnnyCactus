import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'DUST_RUSH_PROGRESS_V1';

export type DustProgress = {
  boards: number;
  hats: number;
  completedLevels: Record<string, boolean>;
  lastSelectedLevel: number;
  townFixed: number;
  townFixedIds: number[];
};

export type DustStory = {
  id: number;
  title: string;
  body: string;
  image: number;
};

export type RepairResult = {
  ok: boolean;
  reason?: 'ALL_FIXED' | 'ALREADY_FIXED' | 'INVALID_ID' | 'NOT_ENOUGH';
  next: DustProgress;
};

export type MarkLevelResult = {
  next: DustProgress;
  rewarded: boolean;
};

const defaultState: DustProgress = {
  boards: 0,
  hats: 0,
  completedLevels: {},
  lastSelectedLevel: 1,
  townFixed: 0,
  townFixedIds: [],
};

export async function loadDustProgress(): Promise<DustProgress> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as Partial<DustProgress>;
    const state: DustProgress = { ...defaultState, ...parsed };
    if (state.townFixed > 0 && (!state.townFixedIds || state.townFixedIds.length === 0)) {
      state.townFixedIds = Array.from({ length: state.townFixed }, (_, i) => i + 1);
    }
    state.townFixed = Array.isArray(state.townFixedIds) ? state.townFixedIds.length : (state.townFixed || 0);
    return state;
  } catch {
    return defaultState;
  }
}

export async function saveDustProgress(nextState: DustProgress): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(nextState));
}

export async function markLevelCompletedAndReward(levelId: number): Promise<MarkLevelResult> {
  const state = await loadDustProgress();
  const already = !!state.completedLevels?.[String(levelId)];

  if (!already) {
    const completedLevels = { ...(state.completedLevels || {}) };
    completedLevels[String(levelId)] = true;
    const next: DustProgress = {
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

export async function setLastSelectedLevel(levelId: number): Promise<DustProgress> {
  const state = await loadDustProgress();
  const next: DustProgress = { ...state, lastSelectedLevel: levelId };
  await saveDustProgress(next);
  return next;
}

export async function repairNextTownBuilding(cost = 30): Promise<RepairResult> {
  const state = await loadDustProgress();
  const ids = state.townFixedIds || [];
  if (ids.length >= 4) return { ok: false, reason: 'ALL_FIXED', next: state };
  const nextId = [1, 2, 3, 4].find(id => !ids.includes(id));
  return repairBuilding(nextId!, cost);
}

export async function repairBuilding(buildingId: number, cost = 30): Promise<RepairResult> {
  const state = await loadDustProgress();
  const ids = state.townFixedIds || [];

  if (ids.includes(buildingId)) {
    return { ok: false, reason: 'ALREADY_FIXED', next: state };
  }
  if (buildingId < 1 || buildingId > 4) {
    return { ok: false, reason: 'INVALID_ID', next: state };
  }

  const boards = Number(state.boards || 0);
  if (boards < cost) {
    return { ok: false, reason: 'NOT_ENOUGH', next: state };
  }

  const nextIds = [...ids, buildingId].sort((a, b) => a - b);
  const next: DustProgress = {
    ...state,
    boards: boards - cost,
    townFixedIds: nextIds,
    townFixed: nextIds.length,
  };
  await saveDustProgress(next);
  return { ok: true, next };
}

const SAVED_STORIES_KEY = 'DUST_RUSH_SAVED_STORIES_V1';

export async function loadSavedStories(): Promise<DustStory[]> {
  try {
    const raw = await AsyncStorage.getItem(SAVED_STORIES_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as DustStory[];
  } catch {
    return [];
  }
}

export async function saveStory(story: DustStory): Promise<boolean> {
  try {
    const saved = await loadSavedStories();
    const exists = saved.some(s => s.id === story.id);
    if (!exists) {
      const updated = [...saved, story];
      await AsyncStorage.setItem(SAVED_STORIES_KEY, JSON.stringify(updated));
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export async function removeSavedStory(storyId: number): Promise<boolean> {
  try {
    const saved = await loadSavedStories();
    const updated = saved.filter(s => s.id !== storyId);
    await AsyncStorage.setItem(SAVED_STORIES_KEY, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
}

export async function isStorySaved(storyId: number): Promise<boolean> {
  try {
    const saved = await loadSavedStories();
    return saved.some(s => s.id === storyId);
  } catch {
    return false;
  }
}
