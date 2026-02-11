import React, {
  useMemo as _uMM_9xQmTrL7pZaVnK4s,
  useState as _uST_6mQpZtLxV8nR3aKs,
  useEffect as _uEF_2Rm9xQpLzT7nVaKs,
  useCallback,
} from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  Pressable as _pRs_7nR3aKsQpLxV8tZm,
  Image as _iMg_6tVmQpLxZ7nR3aKs,
  TextInput as _tIp_1VaKsQpLxT7nR9mZ2,
  Modal as _mDl_6mQpZtLxV8nR3aKs,
  TouchableOpacity as _tOp_7qPzLxVnT3mA9rKb,
  ScrollView as _sCv_9xQmTrL7pZaVnK4s,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
  Share as _sHr_4pLxQnZ8tVmR2aKs,
  Platform,
} from 'react-native';
import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useRoute as _uRT_7nR3aKsQpLxV8tZm,
  useFocusEffect,
} from '@react-navigation/native';
import { markLevelCompletedAndReward } from '../utils/dustProgressStorage';
import LinearGradient from 'react-native-linear-gradient';
import { _dLv_7qPzLxVnT3mA9rKb } from '../data/dustLevels';
import Orientation from 'react-native-orientation-locker';

const _bg_6tVmQpLxZ7nR3aKs = require('../../assets/images/dusthomeappbg.png');
const _cc_1VaKsQpLxT7nR9mZ2 = require('../../assets/images/dustcactus.png');

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

const _0xDsAcBt_4pLxQnZ8tVmR2aKs = ({
  title: _tt_6mQpZtLxV8nR3aKs,
  onPress: _oP_7qPzLxVnT3mA9rKb,
}) => (
  <_pRs_7nR3aKsQpLxV8tZm
    onPress={_oP_7qPzLxVnT3mA9rKb}
    style={({ pressed: _pr_9xQmTrL7pZaVnK4s }) => [
      _d$.aB_6mQpZtLxV8nR3aKs,
      _pr_9xQmTrL7pZaVnK4s && { opacity: 0.9 },
    ]}
  >
    <_tXt_3aKsQpLxVnZ8tRm2 style={_d$.aTx_1VaKsQpLxT7nR9mZ2}>
      {_tt_6mQpZtLxV8nR3aKs}
    </_tXt_3aKsQpLxVnZ8tRm2>
  </_pRs_7nR3aKsQpLxV8tZm>
);

export default function DustPlay() {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const _rt_6mQpZtLxV8nR3aKs = _uRT_7nR3aKsQpLxV8tZm();
  const { height: _ht_2Rm9xQpLzT7nVaKs } = _uWD_2Rm9xQpLzT7nVaKs();

  const _inId_4pLxQnZ8tVmR2aKs = _rt_6mQpZtLxV8nR3aKs?.params?.levelId ?? 1;
  const [_cId_9tVmQpLxZ7nR3aKs, _sCId_7qPzLxVnT3mA9rKb] = _uST_6mQpZtLxV8nR3aKs(
    _inId_4pLxQnZ8tVmR2aKs,
  );

  _uEF_2Rm9xQpLzT7nVaKs(() => {
    const _nx_9xQmTrL7pZaVnK4s = _rt_6mQpZtLxV8nR3aKs?.params?.levelId ?? 1;
    _sCId_7qPzLxVnT3mA9rKb(_nx_9xQmTrL7pZaVnK4s);
  }, [_rt_6mQpZtLxV8nR3aKs?.params?.levelId]);

  const _lv_6tVmQpLxZ7nR3aKs = _uMM_9xQmTrL7pZaVnK4s(
    () =>
      _dLv_7qPzLxVnT3mA9rKb.find(
        _l_2Rm9xQpLzT7nVaKs => _l_2Rm9xQpLzT7nVaKs.id === _cId_9tVmQpLxZ7nR3aKs,
      ) || _dLv_7qPzLxVnT3mA9rKb[0],
    [_cId_9tVmQpLxZ7nR3aKs],
  );

  const [_vl_4pLxQnZ8tVmR2aKs, _sVl_7nR3aKsQpLxV8tZm] =
    _uST_6mQpZtLxV8nR3aKs('');
  const [_rs_1VaKsQpLxT7nR9mZ2, _sRs_6mQpZtLxV8nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(null);
  const [_rw_9xQmTrL7pZaVnK4s, _sRw_2Rm9xQpLzT7nVaKs] =
    _uST_6mQpZtLxV8nR3aKs(false);

  const _rsRt_7qPzLxVnT3mA9rKb = () => {
    _sVl_7nR3aKsQpLxV8tZm('');
    _sRs_6mQpZtLxV8nR3aKs(null);
    _sRw_2Rm9xQpLzT7nVaKs(false);
  };

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => Orientation.unlockAllOrientations();
    }, []),
  );

  const _sb_4pLxQnZ8tVmR2aKs = async () => {
    const _nm_6mQpZtLxV8nR3aKs = parseInt(
      String(_vl_4pLxQnZ8tVmR2aKs).replace(/[^\d]/g, ''),
      10,
    );
    if (!Number.isFinite(_nm_6mQpZtLxV8nR3aKs)) return;

    if (_nm_6mQpZtLxV8nR3aKs === _lv_6tVmQpLxZ7nR3aKs.correctCount) {
      const _re_9tVmQpLxZ7nR3aKs = await markLevelCompletedAndReward(
        _lv_6tVmQpLxZ7nR3aKs.id,
      );
      _sRw_2Rm9xQpLzT7nVaKs(_re_9tVmQpLxZ7nR3aKs.rewarded);
      _sRs_6mQpZtLxV8nR3aKs('win');
    } else {
      _sRs_6mQpZtLxV8nR3aKs('lose');
    }
  };

  const _cl_7nR3aKsQpLxV8tZm = () => _sRs_6mQpZtLxV8nR3aKs(null);

  const _gn_3aKsQpLxVnZ8tRm2 = () => {
    const _nxId_6tVmQpLxZ7nR3aKs = Math.min(
      _lv_6tVmQpLxZ7nR3aKs.id + 1,
      _dLv_7qPzLxVnT3mA9rKb.length,
    );

    _cl_7nR3aKsQpLxV8tZm();
    _sRw_2Rm9xQpLzT7nVaKs(false);
    _sVl_7nR3aKsQpLxV8tZm('');

    _sCId_7qPzLxVnT3mA9rKb(_nxId_6tVmQpLxZ7nR3aKs);

    _nv_9xQmTrL7pZaVnK4s.setParams({ levelId: _nxId_6tVmQpLxZ7nR3aKs });
  };

  const _trAg_9xQmTrL7pZaVnK4s = () => {
    _cl_7nR3aKsQpLxV8tZm();
    _sVl_7nR3aKsQpLxV8tZm('');
  };

  const _sh_2Rm9xQpLzT7nVaKs = () => {
    _sHr_4pLxQnZ8tVmR2aKs.share({
      message:
        _rs_1VaKsQpLxT7nR9mZ2 === 'win'
          ? `Level ${_lv_6tVmQpLxZ7nR3aKs.title} completed! I have earned 15 boards!`
          : `I tried ${_lv_6tVmQpLxZ7nR3aKs.title}. Game over! The storm was stronger this time.`,
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
            title={_lv_6tVmQpLxZ7nR3aKs.title}
            onBack={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
          />

          <_vW_9tVmQpLxZ7nR3aKs style={_d$.bd_9xQmTrL7pZaVnK4s}>
            <_vW_9tVmQpLxZ7nR3aKs style={_d$.cr_6mQpZtLxV8nR3aKs}>
              <_iMg_6tVmQpLxZ7nR3aKs
                source={_lv_6tVmQpLxZ7nR3aKs.image}
                style={_d$.lI_2Rm9xQpLzT7nVaKs}
                resizeMode="cover"
              />
            </_vW_9tVmQpLxZ7nR3aKs>

            <_vW_9tVmQpLxZ7nR3aKs style={_d$.iW_4pLxQnZ8tVmR2aKs}>
              <_tIp_1VaKsQpLxT7nR9mZ2
                value={_vl_4pLxQnZ8tVmR2aKs}
                onChangeText={_sVl_7nR3aKsQpLxV8tZm}
                placeholder="..."
                placeholderTextColor="#260C04"
                keyboardType="number-pad"
                style={_d$.ip_7nR3aKsQpLxV8tZm}
                maxLength={3}
              />
            </_vW_9tVmQpLxZ7nR3aKs>

            <_tOp_7qPzLxVnT3mA9rKb
              onPress={_sb_4pLxQnZ8tVmR2aKs}
              activeOpacity={0.7}
            >
              <_iBg_4pLxQnZ8tVmR2aKs
                source={require('../../assets/images/dustonbtn.png')}
                style={_d$.dB_6tVmQpLxZ7nR3aKs}
              >
                <_tXt_3aKsQpLxVnZ8tRm2 style={_d$.dTx_9tVmQpLxZ7nR3aKs}>
                  Continue
                </_tXt_3aKsQpLxVnZ8tRm2>
              </_iBg_4pLxQnZ8tVmR2aKs>
            </_tOp_7qPzLxVnT3mA9rKb>

            <_vW_9tVmQpLxZ7nR3aKs style={_d$.cW_3aKsQpLxVnZ8tRm2}>
              <_iMg_6tVmQpLxZ7nR3aKs
                source={_cc_1VaKsQpLxT7nR9mZ2}
                style={_d$.cc_4pLxQnZ8tVmR2aKs}
                resizeMode="contain"
              />
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>

          <_mDl_6mQpZtLxV8nR3aKs
            visible={!!_rs_1VaKsQpLxT7nR9mZ2}
            transparent
            animationType="fade"
            onRequestClose={_cl_7nR3aKsQpLxV8tZm}
            statusBarTranslucent={Platform.OS === 'android'}
          >
            <_vW_9tVmQpLxZ7nR3aKs style={_d$.mOv_7qPzLxVnT3mA9rKb}>
              <_iBg_4pLxQnZ8tVmR2aKs
                source={
                  _rs_1VaKsQpLxT7nR9mZ2 === 'win'
                    ? require('../../assets/images/winModalDust.png')
                    : require('../../assets/images/loseModaldust.png')
                }
                style={_d$.mCd_9xQmTrL7pZaVnK4s}
              >
                <_vW_9tVmQpLxZ7nR3aKs style={_d$.mBr_6tVmQpLxZ7nR3aKs}>
                  {_rs_1VaKsQpLxT7nR9mZ2 === 'win' ? (
                    <_vW_9tVmQpLxZ7nR3aKs
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}
                    >
                      <_tOp_7qPzLxVnT3mA9rKb
                        activeOpacity={0.7}
                        onPress={_sh_2Rm9xQpLzT7nVaKs}
                      >
                        <_iMg_6tVmQpLxZ7nR3aKs
                          source={require('../../assets/images/sharebtn.png')}
                        />
                      </_tOp_7qPzLxVnT3mA9rKb>

                      <_0xDsAcBt_4pLxQnZ8tVmR2aKs
                        title={
                          _lv_6tVmQpLxZ7nR3aKs.id ===
                          _dLv_7qPzLxVnT3mA9rKb.length
                            ? 'Home'
                            : 'Next Level'
                        }
                        onPress={
                          _lv_6tVmQpLxZ7nR3aKs.id ===
                          _dLv_7qPzLxVnT3mA9rKb.length
                            ? () => _nv_9xQmTrL7pZaVnK4s.popToTop()
                            : _gn_3aKsQpLxVnZ8tRm2
                        }
                      />

                      <_tOp_7qPzLxVnT3mA9rKb
                        onPress={() => _nv_9xQmTrL7pZaVnK4s.popToTop()}
                        activeOpacity={0.7}
                      >
                        <_iMg_6tVmQpLxZ7nR3aKs
                          source={require('../../assets/images/homebtn.png')}
                        />
                      </_tOp_7qPzLxVnT3mA9rKb>
                    </_vW_9tVmQpLxZ7nR3aKs>
                  ) : (
                    <_vW_9tVmQpLxZ7nR3aKs
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}
                    >
                      <_tOp_7qPzLxVnT3mA9rKb
                        onPress={_sh_2Rm9xQpLzT7nVaKs}
                        activeOpacity={0.7}
                      >
                        <_iMg_6tVmQpLxZ7nR3aKs
                          source={require('../../assets/images/sharebtn.png')}
                        />
                      </_tOp_7qPzLxVnT3mA9rKb>

                      <_0xDsAcBt_4pLxQnZ8tVmR2aKs
                        title="Try Again"
                        onPress={_trAg_9xQmTrL7pZaVnK4s}
                      />

                      <_tOp_7qPzLxVnT3mA9rKb
                        onPress={() => _nv_9xQmTrL7pZaVnK4s.popToTop()}
                      >
                        <_iMg_6tVmQpLxZ7nR3aKs
                          source={require('../../assets/images/homebtn.png')}
                        />
                      </_tOp_7qPzLxVnT3mA9rKb>
                    </_vW_9tVmQpLxZ7nR3aKs>
                  )}
                </_vW_9tVmQpLxZ7nR3aKs>
              </_iBg_4pLxQnZ8tVmR2aKs>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_mDl_6mQpZtLxV8nR3aKs>
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

  dB_6tVmQpLxZ7nR3aKs: {
    width: 194,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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

  bd_9xQmTrL7pZaVnK4s: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 18,
    paddingHorizontal: 16,
  },

  cr_6mQpZtLxV8nR3aKs: {
    width: '86%',
    maxWidth: 280,
    height: 370,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#824021',
    overflow: 'hidden',
  },

  lI_2Rm9xQpLzT7nVaKs: { width: '100%', height: '100%' },

  iW_4pLxQnZ8tVmR2aKs: { width: '86%', maxWidth: 208, marginTop: 16 },

  ip_7nR3aKsQpLxV8tZm: {
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: '#F1C07E',
    borderWidth: 3,
    borderColor: '#7C3A20',
    paddingHorizontal: 14,
    fontSize: 18,
    fontWeight: '800',
    color: '#2a190f',
    textAlign: 'center',
  },

  aB_6mQpZtLxV8nR3aKs: {
    width: 122,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#E99938',
    borderWidth: 2,
    borderColor: '#260C04',
    alignItems: 'center',
    justifyContent: 'center',
  },

  aTx_1VaKsQpLxT7nR9mZ2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#260C04',
  },

  cW_3aKsQpLxVnZ8tRm2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 14,
  },

  cc_4pLxQnZ8tVmR2aKs: { width: 146, height: 190 },

  mOv_7qPzLxVnT3mA9rKb: {
    flex: 1,
    backgroundColor: '#9CD5FDB2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  mCd_9xQmTrL7pZaVnK4s: {
    width: 326,
    height: 490,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 36,
  },

  mBr_6tVmQpLxZ7nR3aKs: { marginTop: 14, gap: 10 },
});
