import React, {
  useCallback as _uCB_7qPzLxVnT3mA9rKb,
  useState as _uST_6mQpZtLxV8nR3aKs,
} from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  Pressable as _pRs_7nR3aKsQpLxV8tZm,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  Modal as _mDl_2Rm9xQpLzT7nVaKs,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useFocusEffect as _uFE_1VaKsQpLxT7nR9mZ2,
} from '@react-navigation/native';
import {
  loadDustProgress as _lDP_4pLxQnZ8tVmR2aKs,
  repairNextTownBuilding as _rNTB_6mQpZtLxV8nR3aKs,
} from '../utils/dustProgressStorage';

const _bg_6tVmQpLxZ7nR3aKs = require('../../assets/images/townBg.png');
const _bI_7qPzLxVnT3mA9rKb = require('../../assets/images/boards.png');

const _tB_9xQmTrL7pZaVnK4s = [
  {
    id: 1,
    name: 'Saloon',
    ruinedImg: require('../../assets/images/town_saloon_ruined.png'),
    fixedImg: require('../../assets/images/town_saloon_fixed.png'),
    style: { left: 0, bottom: 12, width: 257, height: 257 },
    unlockBtnStyle: { left: 85, bottom: 72 },
  },
  {
    id: 2,
    name: 'Workshop',
    ruinedImg: require('../../assets/images/town_workshop_ruined.png'),
    fixedImg: require('../../assets/images/town_workshop_fixed.png'),
    pileImg: require('../../assets/images/pile2.png'),
    style: { right: 12, bottom: 165, width: 220, height: 220 },
    unlockBtnStyle: { right: 48, bottom: 80 },
  },
  {
    id: 3,
    name: 'Barn',
    ruinedImg: require('../../assets/images/town_barn_ruined.png'),
    fixedImg: require('../../assets/images/town_barn_fixed.png'),
    pileImg: require('../../assets/images/pile3.png'),
    style: { left: 10, bottom: 255, width: 182, height: 180 },
    unlockBtnStyle: { left: 45, bottom: 45 },
  },
  {
    id: 4,
    name: 'Houses',
    ruinedImg: require('../../assets/images/town_houses_ruined.png'),
    fixedImg: require('../../assets/images/town_houses_fixed.png'),
    pileImg: require('../../assets/images/pile4.png'),
    style: { right: 18, bottom: 380, width: 220, height: 220 },
    unlockBtnStyle: { right: 55, bottom: 300 },
  },
];

const _0xHd_9tVmQpLxZ7nR3aKs = ({
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

const _0xUb_4pLxQnZ8tVmR2aKs = ({ onPress: _oP_7qPzLxVnT3mA9rKb }) => (
  <_pRs_7nR3aKsQpLxV8tZm
    onPress={_oP_7qPzLxVnT3mA9rKb}
    style={({ pressed }) => [
      _h$.uB_6mQpZtLxV8nR3aKs,
      pressed && { opacity: 0.9 },
    ]}
  >
    <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.uT_9xQmTrL7pZaVnK4s}>
      UNLOCK
    </_tXt_3aKsQpLxVnZ8tRm2>
  </_pRs_7nR3aKsQpLxV8tZm>
);

export default function _0xDsCcTs_1VaKsQpLxT7nR9mZ2() {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const [_pg_6mQpZtLxV8nR3aKs, _sPg_7qPzLxVnT3mA9rKb] =
    _uST_6mQpZtLxV8nR3aKs(null);

  const [_aU_2Rm9xQpLzT7nVaKs, _sAU_9tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(false);
  const [_msg_7nR3aKsQpLxV8tZm, _sMsg_9xQmTrL7pZaVnK4s] =
    _uST_6mQpZtLxV8nR3aKs(null);

  const _rf_4pLxQnZ8tVmR2aKs = _uCB_7qPzLxVnT3mA9rKb(async () => {
    const _p_6mQpZtLxV8nR3aKs = await _lDP_4pLxQnZ8tVmR2aKs();
    _sPg_7qPzLxVnT3mA9rKb(_p_6mQpZtLxV8nR3aKs);
  }, []);

  _uFE_1VaKsQpLxT7nR9mZ2(
    _uCB_7qPzLxVnT3mA9rKb(() => {
      _rf_4pLxQnZ8tVmR2aKs();
      return () => {};
    }, [_rf_4pLxQnZ8tVmR2aKs]),
  );

  const _brd_6tVmQpLxZ7nR3aKs = Number(_pg_6mQpZtLxV8nR3aKs?.boards || 0);
  const _tf_9xQmTrL7pZaVnK4s = Number(_pg_6mQpZtLxV8nR3aKs?.townFixed || 0);

  const _hsN_2Rm9xQpLzT7nVaKs = _tf_9xQmTrL7pZaVnK4s < 4;

  const _tU_7qPzLxVnT3mA9rKb = () => {
    if (!_hsN_2Rm9xQpLzT7nVaKs) {
      _sMsg_9xQmTrL7pZaVnK4s(
        'Your town is fully rebuilt. Nothing left to unlock!',
      );
      return;
    }
    _sAU_9tVmQpLxZ7nR3aKs(true);
  };

  const _dU_6mQpZtLxV8nR3aKs = async () => {
    _sAU_9tVmQpLxZ7nR3aKs(false);

    const _rs_4pLxQnZ8tVmR2aKs = await _rNTB_6mQpZtLxV8nR3aKs(30);

    if (!_rs_4pLxQnZ8tVmR2aKs.ok) {
      if (_rs_4pLxQnZ8tVmR2aKs.reason === 'NOT_ENOUGH') {
        _sMsg_9xQmTrL7pZaVnK4s('Not enough boards.\nWin levels to earn more!');
      } else {
        _sMsg_9xQmTrL7pZaVnK4s('All buildings are already fixed!');
      }
      return;
    }

    _sPg_7qPzLxVnT3mA9rKb(_rs_4pLxQnZ8tVmR2aKs.next);

    const _fx_9tVmQpLxZ7nR3aKs = Number(
      _rs_4pLxQnZ8tVmR2aKs.next.townFixed || 0,
    );
    if (_fx_9tVmQpLxZ7nR3aKs >= 4) {
      _sMsg_9xQmTrL7pZaVnK4s(
        'You didn’t just rebuild a town —\nyou brought its heart back to life.',
      );
    } else {
      _sMsg_9xQmTrL7pZaVnK4s(
        'Nice work!\nA new part of town is coming to life.',
      );
    }
  };

  return (
    <_iBg_4pLxQnZ8tVmR2aKs
      source={_bg_6tVmQpLxZ7nR3aKs}
      style={_h$.bg_8tVmQpLxZ7nR3aKs}
      resizeMode="cover"
    >
      <_sCv_9xQmTrL7pZaVnK4s
        contentContainerStyle={{ flexGrow: 1, height: 800 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs style={{ flex: 1, paddingTop: 52 }}>
          <_0xHd_9tVmQpLxZ7nR3aKs
            title="Cactus Town"
            onBack={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.cP_6mQpZtLxV8nR3aKs}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.cN_9xQmTrL7pZaVnK4s}>
              {_brd_6tVmQpLxZ7nR3aKs}
            </_tXt_3aKsQpLxVnZ8tRm2>
            <_iMg_6tVmQpLxZ7nR3aKs
              source={_bI_7qPzLxVnT3mA9rKb}
              style={_h$.cI_2Rm9xQpLzT7nVaKs}
              resizeMode="contain"
            />
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_h$.sc_7qPzLxVnT3mA9rKb}>
            {_tB_9xQmTrL7pZaVnK4s.map(_b_6mQpZtLxV8nR3aKs => {
              const _fx_4pLxQnZ8tVmR2aKs =
                _b_6mQpZtLxV8nR3aKs.id <= _tf_9xQmTrL7pZaVnK4s;
              const _nx_9tVmQpLxZ7nR3aKs =
                _b_6mQpZtLxV8nR3aKs.id === _tf_9xQmTrL7pZaVnK4s + 1;
              const _hd_2Rm9xQpLzT7nVaKs =
                _b_6mQpZtLxV8nR3aKs.id > _tf_9xQmTrL7pZaVnK4s + 1;

              const _src_7nR3aKsQpLxV8tZm = _hd_2Rm9xQpLzT7nVaKs
                ? _b_6mQpZtLxV8nR3aKs.pileImg
                : _fx_4pLxQnZ8tVmR2aKs
                ? _b_6mQpZtLxV8nR3aKs.fixedImg
                : _b_6mQpZtLxV8nR3aKs.ruinedImg;

              return (
                <_vW_9tVmQpLxZ7nR3aKs
                  key={_b_6mQpZtLxV8nR3aKs.id}
                  style={[_h$.bW_6mQpZtLxV8nR3aKs, _b_6mQpZtLxV8nR3aKs.style]}
                >
                  <_iMg_6tVmQpLxZ7nR3aKs
                    source={_src_7nR3aKsQpLxV8tZm}
                    style={_h$.bI_9xQmTrL7pZaVnK4s}
                    resizeMode="contain"
                  />
                  {!_fx_4pLxQnZ8tVmR2aKs && _nx_9tVmQpLxZ7nR3aKs && (
                    <_vW_9tVmQpLxZ7nR3aKs
                      style={[
                        _h$.uP_2Rm9xQpLzT7nVaKs,
                        _b_6mQpZtLxV8nR3aKs.unlockBtnStyle,
                      ]}
                    >
                      <_0xUb_4pLxQnZ8tVmR2aKs onPress={_tU_7qPzLxVnT3mA9rKb} />
                    </_vW_9tVmQpLxZ7nR3aKs>
                  )}
                </_vW_9tVmQpLxZ7nR3aKs>
              );
            })}
          </_vW_9tVmQpLxZ7nR3aKs>

          <_mDl_2Rm9xQpLzT7nVaKs
            visible={_aU_2Rm9xQpLzT7nVaKs}
            transparent
            animationType="fade"
            onRequestClose={() => _sAU_9tVmQpLxZ7nR3aKs(false)}
          >
            <_vW_9tVmQpLxZ7nR3aKs style={_h$.mO_6mQpZtLxV8nR3aKs}>
              <_vW_9tVmQpLxZ7nR3aKs style={_h$.mFr_9xQmTrL7pZaVnK4s}>
                <LinearGradient
                  colors={['#FEE1BE', '#F7B96E']}
                  style={_h$.cC_7qPzLxVnT3mA9rKb}
                >
                  <_pRs_7nR3aKsQpLxV8tZm
                    onPress={() => _sAU_9tVmQpLxZ7nR3aKs(false)}
                    style={_h$.cX_2Rm9xQpLzT7nVaKs}
                    hitSlop={10}
                  >
                    <_iMg_6tVmQpLxZ7nR3aKs
                      source={require('../../assets/images/tdesign_close.png')}
                    />
                  </_pRs_7nR3aKsQpLxV8tZm>

                  <_vW_9tVmQpLxZ7nR3aKs
                    style={{ alignItems: 'center', paddingVertical: 26 }}
                  >
                    <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.cT_6mQpZtLxV8nR3aKs}>
                      Unlock for:
                    </_tXt_3aKsQpLxVnZ8tRm2>

                    <_pRs_7nR3aKsQpLxV8tZm
                      onPress={_dU_6mQpZtLxV8nR3aKs}
                      style={_h$.cPll_9xQmTrL7pZaVnK4s}
                    >
                      <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.cNm_7qPzLxVnT3mA9rKb}>
                        30
                      </_tXt_3aKsQpLxVnZ8tRm2>
                      <_iMg_6tVmQpLxZ7nR3aKs
                        source={_bI_7qPzLxVnT3mA9rKb}
                        style={_h$.cIc_2Rm9xQpLzT7nVaKs}
                        resizeMode="contain"
                      />
                    </_pRs_7nR3aKsQpLxV8tZm>

                    <_pRs_7nR3aKsQpLxV8tZm
                      onPress={() => _sAU_9tVmQpLxZ7nR3aKs(false)}
                      style={{ marginTop: 10 }}
                    >
                      <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.nT_6mQpZtLxV8nR3aKs}>
                        No
                      </_tXt_3aKsQpLxVnZ8tRm2>
                    </_pRs_7nR3aKsQpLxV8tZm>
                  </_vW_9tVmQpLxZ7nR3aKs>
                </LinearGradient>
              </_vW_9tVmQpLxZ7nR3aKs>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_mDl_2Rm9xQpLzT7nVaKs>

          <_mDl_2Rm9xQpLzT7nVaKs
            visible={!!_msg_7nR3aKsQpLxV8tZm}
            transparent
            animationType="fade"
            onRequestClose={() => _sMsg_9xQmTrL7pZaVnK4s(null)}
          >
            <_vW_9tVmQpLxZ7nR3aKs style={_h$.mO_6mQpZtLxV8nR3aKs}>
              <_vW_9tVmQpLxZ7nR3aKs style={_h$.mC_7qPzLxVnT3mA9rKb}>
                <_pRs_7nR3aKsQpLxV8tZm
                  onPress={() => _sMsg_9xQmTrL7pZaVnK4s(null)}
                  style={_h$.cX_2Rm9xQpLzT7nVaKs}
                  hitSlop={10}
                >
                  <_tXt_3aKsQpLxVnZ8tRm2
                    style={{ fontSize: 20, fontWeight: '900' }}
                  >
                    ×
                  </_tXt_3aKsQpLxVnZ8tRm2>
                </_pRs_7nR3aKsQpLxV8tZm>

                <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.mT_6mQpZtLxV8nR3aKs}>
                  {_msg_7nR3aKsQpLxV8tZm}
                </_tXt_3aKsQpLxVnZ8tRm2>

                <_iMg_6tVmQpLxZ7nR3aKs
                  source={require('../../assets/images/dustcactus.png')}
                  style={_h$.mK_9xQmTrL7pZaVnK4s}
                  resizeMode="contain"
                />
              </_vW_9tVmQpLxZ7nR3aKs>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_mDl_2Rm9xQpLzT7nVaKs>
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

  cP_6mQpZtLxV8nR3aKs: {
    alignSelf: 'center',
    marginTop: 12,
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7B96E',
    borderWidth: 3,
    borderColor: '#7C3A20',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cN_9xQmTrL7pZaVnK4s: { fontSize: 20, fontWeight: '900', color: '#2a190f' },
  cI_2Rm9xQpLzT7nVaKs: { width: 46, height: 20 },

  sc_7qPzLxVnT3mA9rKb: { flex: 1 },

  bW_6mQpZtLxV8nR3aKs: { position: 'absolute' },
  bI_9xQmTrL7pZaVnK4s: { width: '100%', height: '100%' },

  uP_2Rm9xQpLzT7nVaKs: { position: 'absolute' },
  uB_6mQpZtLxV8nR3aKs: {
    width: 120,
    height: 36,
    borderRadius: 50,
    backgroundColor: '#85C463',
    borderWidth: 3,
    borderColor: '#743E25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uT_9xQmTrL7pZaVnK4s: { color: '#260C04', fontSize: 16, fontWeight: '800' },

  mO_6mQpZtLxV8nR3aKs: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },

  mFr_9xQmTrL7pZaVnK4s: {
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#7C3A20',
    borderRadius: 30,
  },
  cC_7qPzLxVnT3mA9rKb: { borderRadius: 28, alignItems: 'center', width: 200 },

  cX_2Rm9xQpLzT7nVaKs: { position: 'absolute', right: 12, top: 10 },

  cT_6mQpZtLxV8nR3aKs: {
    fontSize: 19,
    fontWeight: '600',
    marginTop: 8,
    color: '#260C04',
    marginBottom: 10,
  },

  cPll_9xQmTrL7pZaVnK4s: {
    marginTop: 12,
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    backgroundColor: '#7CBA52',
    borderWidth: 3,
    borderColor: '#2E4A1E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cNm_7qPzLxVnT3mA9rKb: { fontSize: 18, fontWeight: '900', color: '#1b1b1b' },
  cIc_2Rm9xQpLzT7nVaKs: { width: 46, height: 20 },

  nT_6mQpZtLxV8nR3aKs: { fontSize: 20, fontWeight: '700', color: '#260C04' },

  mC_7qPzLxVnT3mA9rKb: {
    width: '92%',
    maxWidth: 420,
    borderRadius: 18,
    backgroundColor: '#F3D3A3',
    borderWidth: 3,
    borderColor: '#7C3A20',
    padding: 16,
  },
  mT_6mQpZtLxV8nR3aKs: {
    fontSize: 18,
    fontWeight: '900',
    color: '#2a190f',
    marginTop: 10,
    lineHeight: 24,
  },
  mK_9xQmTrL7pZaVnK4s: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 12,
  },
});
