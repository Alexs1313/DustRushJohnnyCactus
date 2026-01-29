import React, {
  useCallback as _uCB_7qPzLxVnT3mA9rKb,
  useMemo as _uMM_9xQmTrL7pZaVnK4s,
  useState as _uST_6mQpZtLxV8nR3aKs,
} from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  Pressable as _pRs_7nR3aKsQpLxV8tZm,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  TouchableOpacity as _tOp_7qPzLxVnT3mA9rKb,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  useFocusEffect as _uFE_1VaKsQpLxT7nR9mZ2,
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
} from '@react-navigation/native';
import {
  loadDustProgress,
  setLastSelectedLevel,
} from '../utils/dustProgressStorage';
import { _dLv_7qPzLxVnT3mA9rKb } from '../data/dustLevels';

const _bg_6tVmQpLxZ7nR3aKs = require('../../assets/images/dusthomeappbg.png');

const _0xDsHd_9tVmQpLxZ7nR3aKs = ({
  title: _tt_6mQpZtLxV8nR3aKs,
  onBack: _oB_4pLxQnZ8tVmR2aKs,
}) => (
  <_vW_9tVmQpLxZ7nR3aKs style={_d$.hW_7qPzLxVnT3mA9rKb}>
    <_vW_9tVmQpLxZ7nR3aKs
      style={{
        borderWidth: 4,
        borderColor: '#7C3A20',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={_d$.hB_9xQmTrL7pZaVnK4s}
      >
        <_pRs_7nR3aKsQpLxV8tZm
          onPress={_oB_4pLxQnZ8tVmR2aKs}
          style={_d$.bB_6tVmQpLxZ7nR3aKs}
          hitSlop={12}
        >
          <_iMg_6tVmQpLxZ7nR3aKs
            source={require('../../assets/images/dusstback.png')}
          />
        </_pRs_7nR3aKsQpLxV8tZm>
        <_tXt_3aKsQpLxVnZ8tRm2 style={_d$.hT_2Rm9xQpLzT7nVaKs}>
          {_tt_6mQpZtLxV8nR3aKs}
        </_tXt_3aKsQpLxVnZ8tRm2>
        <_vW_9tVmQpLxZ7nR3aKs style={{ width: 34 }} />
      </LinearGradient>
    </_vW_9tVmQpLxZ7nR3aKs>
  </_vW_9tVmQpLxZ7nR3aKs>
);

const _0xDsLvTl_4pLxQnZ8tVmR2aKs = ({
  n: _n_6mQpZtLxV8nR3aKs,
  unlocked: _un_9xQmTrL7pZaVnK4s,
  selected: _sl_2Rm9xQpLzT7nVaKs,
  onPress: _oP_7qPzLxVnT3mA9rKb,
}) => {
  const _ts_6tVmQpLxZ7nR3aKs = [
    _d$.tl_7qPzLxVnT3mA9rKb,
    !_un_9xQmTrL7pZaVnK4s && _d$.tL_9xQmTrL7pZaVnK4s,
    _un_9xQmTrL7pZaVnK4s && !_sl_2Rm9xQpLzT7nVaKs && _d$.tU_6mQpZtLxV8nR3aKs,
    _sl_2Rm9xQpLzT7nVaKs && _d$.tS_2Rm9xQpLzT7nVaKs,
  ];

  return (
    <_pRs_7nR3aKsQpLxV8tZm
      disabled={!_un_9xQmTrL7pZaVnK4s}
      onPress={_oP_7qPzLxVnT3mA9rKb}
      style={_ts_6tVmQpLxZ7nR3aKs}
    >
      <_tXt_3aKsQpLxVnZ8tRm2 style={_d$.tTx_4pLxQnZ8tVmR2aKs}>
        {_n_6mQpZtLxV8nR3aKs}
      </_tXt_3aKsQpLxVnZ8tRm2>
    </_pRs_7nR3aKsQpLxV8tZm>
  );
};

const _0xDsWdBt_1VaKsQpLxT7nR9mZ2 = ({
  title: _tt_6mQpZtLxV8nR3aKs,
  onPress: _oP_7qPzLxVnT3mA9rKb,
}) => (
  <_tOp_7qPzLxVnT3mA9rKb onPress={_oP_7qPzLxVnT3mA9rKb} activeOpacity={0.7}>
    <_iBg_4pLxQnZ8tVmR2aKs
      source={require('../../assets/images/dustonbtn.png')}
      style={_d$.dB_6tVmQpLxZ7nR3aKs}
    >
      <_tXt_3aKsQpLxVnZ8tRm2 style={_d$.dTx_9tVmQpLxZ7nR3aKs}>
        {_tt_6mQpZtLxV8nR3aKs}
      </_tXt_3aKsQpLxVnZ8tRm2>
    </_iBg_4pLxQnZ8tVmR2aKs>
  </_tOp_7qPzLxVnT3mA9rKb>
);

export default function _0xDsLvSc_7nR3aKsQpLxV8tZm() {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const [_pg_6mQpZtLxV8nR3aKs, _sPg_7qPzLxVnT3mA9rKb] =
    _uST_6mQpZtLxV8nR3aKs(null);
  const [_sl_2Rm9xQpLzT7nVaKs, _sSl_9tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(1);
  const { height: _ht_2Rm9xQpLzT7nVaKs } = _uWD_2Rm9xQpLzT7nVaKs();

  _uFE_1VaKsQpLxT7nR9mZ2(
    _uCB_7qPzLxVnT3mA9rKb(() => {
      (async () => {
        const _p_4pLxQnZ8tVmR2aKs = await loadDustProgress();
        _sPg_7qPzLxVnT3mA9rKb(_p_4pLxQnZ8tVmR2aKs);

        const _ls_6tVmQpLxZ7nR3aKs =
          _p_4pLxQnZ8tVmR2aKs?.lastSelectedLevel ??
          _p_4pLxQnZ8tVmR2aKs?.lastSelected ??
          1;

        if (Number.isFinite(_ls_6tVmQpLxZ7nR3aKs)) {
          _sSl_9tVmQpLxZ7nR3aKs(
            Math.max(
              1,
              Math.min(_dLv_7qPzLxVnT3mA9rKb.length, _ls_6tVmQpLxZ7nR3aKs),
            ),
          );
        }
      })();
    }, []),
  );

  const _unMx_4pLxQnZ8tVmR2aKs = _uMM_9xQmTrL7pZaVnK4s(() => {
    if (!_pg_6mQpZtLxV8nR3aKs) return 1;

    const _cm_7nR3aKsQpLxV8tZm = _pg_6mQpZtLxV8nR3aKs.completedLevels || {};
    const _cmNs_2Rm9xQpLzT7nVaKs = Object.keys(_cm_7nR3aKsQpLxV8tZm)
      .filter(_k_9xQmTrL7pZaVnK4s => _cm_7nR3aKsQpLxV8tZm[_k_9xQmTrL7pZaVnK4s])
      .map(_k_9xQmTrL7pZaVnK4s => parseInt(_k_9xQmTrL7pZaVnK4s, 10))
      .filter(_n_6mQpZtLxV8nR3aKs => Number.isFinite(_n_6mQpZtLxV8nR3aKs));

    const _mx_6tVmQpLxZ7nR3aKs = _cmNs_2Rm9xQpLzT7nVaKs.length
      ? Math.max(..._cmNs_2Rm9xQpLzT7nVaKs)
      : 0;
    return Math.min(_mx_6tVmQpLxZ7nR3aKs + 1, _dLv_7qPzLxVnT3mA9rKb.length);
  }, [_pg_6mQpZtLxV8nR3aKs]);

  const _onSl_9tVmQpLxZ7nR3aKs = async _id_1VaKsQpLxT7nR9mZ2 => {
    _sSl_9tVmQpLxZ7nR3aKs(_id_1VaKsQpLxT7nR9mZ2);
    const _nx_6mQpZtLxV8nR3aKs = await setLastSelectedLevel(
      _id_1VaKsQpLxT7nR9mZ2,
    );
    _sPg_7qPzLxVnT3mA9rKb(_nx_6mQpZtLxV8nR3aKs);
  };

  const _st_7qPzLxVnT3mA9rKb = () => {
    _nv_9xQmTrL7pZaVnK4s.navigate('DustPlay', {
      levelId: _sl_2Rm9xQpLzT7nVaKs,
    });
  };

  return (
    <_iBg_4pLxQnZ8tVmR2aKs
      source={_bg_6tVmQpLxZ7nR3aKs}
      style={_d$.bg_7qPzLxVnT3mA9rKb}
      resizeMode="cover"
    >
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs
          style={{
            flex: 1,
            paddingBottom: 50,
            paddingTop: _ht_2Rm9xQpLzT7nVaKs * 0.07,
          }}
        >
          <_0xDsHd_9tVmQpLxZ7nR3aKs
            title="Levels"
            onBack={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_d$.gW_9xQmTrL7pZaVnK4s}>
            <_vW_9tVmQpLxZ7nR3aKs style={_d$.gd_6mQpZtLxV8nR3aKs}>
              {_dLv_7qPzLxVnT3mA9rKb.map(_lv_2Rm9xQpLzT7nVaKs => {
                const _un_9xQmTrL7pZaVnK4s =
                  _lv_2Rm9xQpLzT7nVaKs.id <= _unMx_4pLxQnZ8tVmR2aKs;

                return (
                  <_0xDsLvTl_4pLxQnZ8tVmR2aKs
                    key={_lv_2Rm9xQpLzT7nVaKs.id}
                    n={_lv_2Rm9xQpLzT7nVaKs.id}
                    unlocked={_un_9xQmTrL7pZaVnK4s}
                    selected={_sl_2Rm9xQpLzT7nVaKs === _lv_2Rm9xQpLzT7nVaKs.id}
                    onPress={() =>
                      _onSl_9tVmQpLxZ7nR3aKs(_lv_2Rm9xQpLzT7nVaKs.id)
                    }
                  />
                );
              })}
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_d$.sW_2Rm9xQpLzT7nVaKs}>
            <_0xDsWdBt_1VaKsQpLxT7nR9mZ2
              title={`Start Level ${_sl_2Rm9xQpLzT7nVaKs}`}
              onPress={_st_7qPzLxVnT3mA9rKb}
            />
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
}

const _d$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  bg_7qPzLxVnT3mA9rKb: { flex: 1 },

  hW_7qPzLxVnT3mA9rKb: { paddingHorizontal: 16 },
  hB_9xQmTrL7pZaVnK4s: {
    height: 65,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bB_6tVmQpLxZ7nR3aKs: {
    position: 'absolute',
    left: 12,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hT_2Rm9xQpLzT7nVaKs: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFD77B',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },

  gW_9xQmTrL7pZaVnK4s: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gd_6mQpZtLxV8nR3aKs: {
    width: '86%',
    maxWidth: 360,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 28,
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 30,
  },

  tl_7qPzLxVnT3mA9rKb: {
    width: 82,
    height: 82,
    borderRadius: 10,
    backgroundColor: '#AEFF82',
    borderWidth: 4,
    borderColor: '#824021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tL_9xQmTrL7pZaVnK4s: { backgroundColor: '#F7B96E' },
  tU_6mQpZtLxV8nR3aKs: {},
  tS_2Rm9xQpLzT7nVaKs: { backgroundColor: '#FF8A37' },

  tTx_4pLxQnZ8tVmR2aKs: {
    fontSize: 32,
    fontWeight: '900',
    color: '#7C3A20',
  },

  dB_6tVmQpLxZ7nR3aKs: {
    width: 194,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  dTx_9tVmQpLxZ7nR3aKs: {
    color: '#FBC914',
    fontSize: 22,
    fontWeight: '800',
  },

  sW_2Rm9xQpLzT7nVaKs: { paddingBottom: 26, alignItems: 'center' },
});
