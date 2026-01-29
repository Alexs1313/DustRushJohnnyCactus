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
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useFocusEffect as _uFE_1VaKsQpLxT7nR9mZ2,
} from '@react-navigation/native';
import { loadDustProgress as _lDP_4pLxQnZ8tVmR2aKs } from '../utils/dustProgressStorage';

const _bg_6tVmQpLxZ7nR3aKs = require('../../assets/images/dusthomeappbg.png');

const _hts_7qPzLxVnT3mA9rKb = [
  { id: 1, image: require('../../assets/images/dusthat1.png') },
  { id: 2, image: require('../../assets/images/dusthat2.png') },
  { id: 3, image: require('../../assets/images/dusthat3.png') },
  { id: 4, image: require('../../assets/images/dusthat4.png') },
  { id: 5, image: require('../../assets/images/dusthat5.png') },
  { id: 6, image: require('../../assets/images/dusthat6.png') },
  { id: 7, image: require('../../assets/images/dusthat7.png') },
  { id: 8, image: require('../../assets/images/dusthat8.png') },
];

const _0xDsHd_9tVmQpLxZ7nR3aKs = ({
  title: _tt_6mQpZtLxV8nR3aKs,
  onBack: _oB_4pLxQnZ8tVmR2aKs,
}) => (
  <_vW_9tVmQpLxZ7nR3aKs style={_h$.hW_7qPzLxVnT3mA9rKb}>
    <_vW_9tVmQpLxZ7nR3aKs style={_h$.hBr_9xQmTrL7pZaVnK4s}>
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={_h$.hB_6mQpZtLxV8nR3aKs}
      >
        <_pRs_7nR3aKsQpLxV8tZm
          onPress={_oB_4pLxQnZ8tVmR2aKs}
          style={_h$.bB_2Rm9xQpLzT7nVaKs}
          hitSlop={12}
        >
          <_iMg_6tVmQpLxZ7nR3aKs
            source={require('../../assets/images/dusstback.png')}
          />
        </_pRs_7nR3aKsQpLxV8tZm>
        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.hT_7qPzLxVnT3mA9rKb}>
          {_tt_6mQpZtLxV8nR3aKs}
        </_tXt_3aKsQpLxVnZ8tRm2>
        <_vW_9tVmQpLxZ7nR3aKs style={{ width: 34 }} />
      </LinearGradient>
    </_vW_9tVmQpLxZ7nR3aKs>
  </_vW_9tVmQpLxZ7nR3aKs>
);

const _0xHtTl_4pLxQnZ8tVmR2aKs = ({
  unlocked: _un_9xQmTrL7pZaVnK4s,
  image: _im_6tVmQpLxZ7nR3aKs,
  onPress: _oP_7qPzLxVnT3mA9rKb,
}) => {
  if (_un_9xQmTrL7pZaVnK4s) {
    return (
      <_iBg_4pLxQnZ8tVmR2aKs
        source={require('../../assets/images/unlockedframe.png')}
        style={[_h$.tL_6mQpZtLxV8nR3aKs]}
      >
        <_pRs_7nR3aKsQpLxV8tZm onPress={_oP_7qPzLxVnT3mA9rKb}>
          <_iMg_6tVmQpLxZ7nR3aKs
            source={_im_6tVmQpLxZ7nR3aKs}
            style={_h$.hI_2Rm9xQpLzT7nVaKs}
          />
        </_pRs_7nR3aKsQpLxV8tZm>
      </_iBg_4pLxQnZ8tVmR2aKs>
    );
  }

  return (
    <_iBg_4pLxQnZ8tVmR2aKs
      source={require('../../assets/images/lockedframe.png')}
      style={[_h$.tL_6mQpZtLxV8nR3aKs]}
    >
      <_vW_9tVmQpLxZ7nR3aKs style={_h$.lW_7qPzLxVnT3mA9rKb}>
        <_iMg_6tVmQpLxZ7nR3aKs
          source={require('../../assets/images/mingcute_lock-fill.png')}
          resizeMode="contain"
        />
      </_vW_9tVmQpLxZ7nR3aKs>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

export default function _0xDsHtVl_1VaKsQpLxT7nR9mZ2() {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const { height: _ht_2Rm9xQpLzT7nVaKs } = _uWD_2Rm9xQpLzT7nVaKs();
  const [_pg_6mQpZtLxV8nR3aKs, _sPg_7qPzLxVnT3mA9rKb] =
    _uST_6mQpZtLxV8nR3aKs(null);

  const _rf_9tVmQpLxZ7nR3aKs = _uCB_7qPzLxVnT3mA9rKb(async () => {
    const _p_4pLxQnZ8tVmR2aKs = await _lDP_4pLxQnZ8tVmR2aKs();
    _sPg_7qPzLxVnT3mA9rKb(_p_4pLxQnZ8tVmR2aKs);
  }, []);

  _uFE_1VaKsQpLxT7nR9mZ2(
    _uCB_7qPzLxVnT3mA9rKb(() => {
      _rf_9tVmQpLxZ7nR3aKs();
    }, [_rf_9tVmQpLxZ7nR3aKs]),
  );

  const _unC_6tVmQpLxZ7nR3aKs = _uMM_9xQmTrL7pZaVnK4s(() => {
    if (!_pg_6mQpZtLxV8nR3aKs) return 0;

    const _hs_2Rm9xQpLzT7nVaKs = Number(_pg_6mQpZtLxV8nR3aKs.hats || 0);

    const _cm_7nR3aKsQpLxV8tZm = _pg_6mQpZtLxV8nR3aKs.completedLevels || {};
    const _cmC_9xQmTrL7pZaVnK4s = Object.keys(_cm_7nR3aKsQpLxV8tZm).filter(
      _k_6mQpZtLxV8nR3aKs => _cm_7nR3aKsQpLxV8tZm[_k_6mQpZtLxV8nR3aKs],
    ).length;

    return Math.max(_hs_2Rm9xQpLzT7nVaKs, _cmC_9xQmTrL7pZaVnK4s);
  }, [_pg_6mQpZtLxV8nR3aKs]);

  return (
    <_iBg_4pLxQnZ8tVmR2aKs
      source={_bg_6tVmQpLxZ7nR3aKs}
      style={_h$.bg_8tVmQpLxZ7nR3aKs}
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
            title="Hat Vault"
            onBack={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.gW_6mQpZtLxV8nR3aKs}>
            <_vW_9tVmQpLxZ7nR3aKs style={_h$.gd_9xQmTrL7pZaVnK4s}>
              {_hts_7qPzLxVnT3mA9rKb.map(
                (_htIt_2Rm9xQpLzT7nVaKs, _ix_7nR3aKsQpLxV8tZm) => {
                  const _un_9xQmTrL7pZaVnK4s =
                    _ix_7nR3aKsQpLxV8tZm < _unC_6tVmQpLxZ7nR3aKs;

                  return (
                    <_0xHtTl_4pLxQnZ8tVmR2aKs
                      key={_htIt_2Rm9xQpLzT7nVaKs.id}
                      unlocked={_un_9xQmTrL7pZaVnK4s}
                      image={_htIt_2Rm9xQpLzT7nVaKs.image}
                      onPress={() => {
                        // navigation.navigate('...', { hatId: _htIt_2Rm9xQpLzT7nVaKs.id })
                      }}
                    />
                  );
                },
              )}
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_9xQmTrL7pZaVnK4s>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
}

const _h$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  bg_8tVmQpLxZ7nR3aKs: { flex: 1 },

  hW_7qPzLxVnT3mA9rKb: { paddingHorizontal: 16 },
  hBr_9xQmTrL7pZaVnK4s: {
    borderWidth: 4,
    borderColor: '#7C3A20',
    borderRadius: 12,
    overflow: 'hidden',
  },
  hB_6mQpZtLxV8nR3aKs: {
    height: 65,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bB_2Rm9xQpLzT7nVaKs: {
    position: 'absolute',
    left: 12,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hT_7qPzLxVnT3mA9rKb: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFD77B',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },

  gW_6mQpZtLxV8nR3aKs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  gd_9xQmTrL7pZaVnK4s: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },

  tL_6mQpZtLxV8nR3aKs: {
    width: 115,
    height: 112,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lW_7qPzLxVnT3mA9rKb: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  hI_2Rm9xQpLzT7nVaKs: {
    width: 120,
    height: 65,
  },
});
