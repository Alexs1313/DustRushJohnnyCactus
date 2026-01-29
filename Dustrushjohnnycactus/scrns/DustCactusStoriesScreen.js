import React, {
  useCallback as _uCB_7qPzLxVnT3mA9rKb,
  useMemo as _uMM_5nR3aKsQpLxV8tZm,
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
  Share as _sHr_2Rm9xQpLzT7nVaKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
  useFocusEffect as _uFE_1VaKsQpLxT7nR9mZ2,
} from '@react-navigation/native';
import { loadDustProgress as _lDP_4pLxQnZ8tVmR2aKs } from '../utils/dustProgressStorage';

const _bg_6tVmQpLxZ7nR3aKs = require('../../assets/images/townBg.png');

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

const _0xIb_7nR3aKsQpLxV8tZm = ({
  onPress: _oP_7qPzLxVnT3mA9rKb,
  icon: _ic_6mQpZtLxV8nR3aKs,
}) => (
  <_pRs_7nR3aKsQpLxV8tZm
    onPress={_oP_7qPzLxVnT3mA9rKb}
    style={({ pressed }) => [pressed && { opacity: 0.85 }]}
  >
    <_iMg_6tVmQpLxZ7nR3aKs source={_ic_6mQpZtLxV8nR3aKs} resizeMode="contain" />
  </_pRs_7nR3aKsQpLxV8tZm>
);

const _0xNb_4pLxQnZ8tVmR2aKs = ({ onPress: _oP_7qPzLxVnT3mA9rKb }) => (
  <_pRs_7nR3aKsQpLxV8tZm
    onPress={_oP_7qPzLxVnT3mA9rKb}
    style={({ pressed }) => [
      _h$.nB_6mQpZtLxV8nR3aKs,
      pressed && { opacity: 0.9 },
    ]}
  >
    <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.nT_9xQmTrL7pZaVnK4s}>
      Next
    </_tXt_3aKsQpLxVnZ8tRm2>
  </_pRs_7nR3aKsQpLxV8tZm>
);

export default function _0xDsCcSts_1VaKsQpLxT7nR9mZ2() {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const [_pg_6mQpZtLxV8nR3aKs, _sPg_7qPzLxVnT3mA9rKb] =
    _uST_6mQpZtLxV8nR3aKs(null);
  const [_ix_2Rm9xQpLzT7nVaKs, _sIx_9tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(0);

  const _rf_4pLxQnZ8tVmR2aKs = _uCB_7qPzLxVnT3mA9rKb(async () => {
    const _p_6mQpZtLxV8nR3aKs = await _lDP_4pLxQnZ8tVmR2aKs();
    _sPg_7qPzLxVnT3mA9rKb(_p_6mQpZtLxV8nR3aKs);
  }, []);

  _uFE_1VaKsQpLxT7nR9mZ2(
    _uCB_7qPzLxVnT3mA9rKb(() => {
      _rf_4pLxQnZ8tVmR2aKs();
    }, [_rf_4pLxQnZ8tVmR2aKs]),
  );

  const _tf_9xQmTrL7pZaVnK4s = Number(_pg_6mQpZtLxV8nR3aKs?.townFixed || 0);
  const _un_6tVmQpLxZ7nR3aKs = Math.max(0, Math.min(4, _tf_9xQmTrL7pZaVnK4s));

  const _st_7qPzLxVnT3mA9rKb = _uMM_5nR3aKsQpLxV8tZm(
    () => [
      {
        id: 1,
        title: 'Saloon Cactus – Bartender',
        image: require('../../assets/images/story1.png'),
        body:
          '"No music. No laughter. Just silence."\n' +
          'That’s what my saloon became after the storm.\n' +
          'Broken chairs, smashed bottles,\n' +
          'dust everywhere.\n' +
          'I thought the party was over for good.\n' +
          'But you brought the boards.\n' +
          'You raised the walls again.\n' +
          'Now the piano plays.\n' +
          'Glasses clink.\n' +
          'Stories flow like whiskey.',
      },
      {
        id: 2,
        title: 'Cactus Mechanic – Workshop Owner',
        image: require('../../assets/images/story2.png'),
        body:
          '"That storm nearly wiped out my workshop...\n' +
          'tools buried, walls cracked, everything gone."\n' +
          'I’ve spent my whole life fixing things — wagons,\n' +
          'doors, broken dreams.\n\n' +
          'When the dust settled, I thought it was over.\n' +
          'But you came.\n' +
          'You found my tools.\n' +
          'You rebuilt my shop.\n' +
          'Now the hammer sings again.\n' +
          'Sparks fly like fireflies.\n' +
          "Thank you, partner. This town still needs fixing — and I'm ready.",
      },
      {
        id: 3,
        title: 'Stable Cactus – Horse Keeper',
        image: require('../../assets/images/story3.png'),
        body:
          '"They ran... every single one of them."\n' +
          'The storm scared my horses.\n' +
          'They disappeared into the dust.\n' +
          'I stood alone, calling their names.\n' +
          'Thinking I lost them forever.\n\n' +
          'But you found them.\n' +
          'One by one.\n' +
          'You brought them home.\n' +
          'Now I hear hooves again.\n' +
          'That’s the sound of hope.\n' +
          'Thank you, friend. You saved more than a stable — you saved my heart.',
      },
      {
        id: 4,
        title: 'Local Cactus Mom – With Kids',
        image: require('../../assets/images/story4.png'),
        body:
          '"Mom... where will we sleep now?"\n' +
          'That’s what my little cactus asked after the storm.\n' +
          'Our roof was gone.\n' +
          'Windows broken. Everything felt cold.\n' +
          'I tried to smile. But inside... I was scared.\n\n' +
          'Then you came.\n' +
          'You rebuilt our home.\n' +
          'You gave my kids a safe place again.\n' +
          'Now they laugh.\n' +
          'They play.\n' +
          'They dream.\n\n' +
          "Thank you for giving us our home back. You're our hero.",
      },
    ],
    [],
  );

  const _av_2Rm9xQpLzT7nVaKs = _st_7qPzLxVnT3mA9rKb.slice(
    0,
    _un_6tVmQpLxZ7nR3aKs,
  );

  const _sIxSafe_9tVmQpLxZ7nR3aKs = _av_2Rm9xQpLzT7nVaKs.length
    ? Math.min(_ix_2Rm9xQpLzT7nVaKs, _av_2Rm9xQpLzT7nVaKs.length - 1)
    : 0;

  const _cr_7nR3aKsQpLxV8tZm = _av_2Rm9xQpLzT7nVaKs[_sIxSafe_9tVmQpLxZ7nR3aKs];

  const _nx_6mQpZtLxV8nR3aKs = () => {
    if (!_av_2Rm9xQpLzT7nVaKs.length) return;
    _sIx_9tVmQpLxZ7nR3aKs(p => (p + 1) % _av_2Rm9xQpLzT7nVaKs.length);
  };

  const _sh_4pLxQnZ8tVmR2aKs = async () => {
    if (!_cr_7nR3aKsQpLxV8tZm) return;
    await _sHr_2Rm9xQpLzT7nVaKs.share({
      message: `${_cr_7nR3aKsQpLxV8tZm.title}\n\n${_cr_7nR3aKsQpLxV8tZm.body}`,
    });
  };

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
          style={{ flex: 1, paddingTop: 52, paddingBottom: 24 }}
        >
          <_0xHd_9tVmQpLxZ7nR3aKs
            title="Cactus Stories"
            onBack={() => _nv_9xQmTrL7pZaVnK4s.goBack()}
          />

          {!_av_2Rm9xQpLzT7nVaKs.length ? (
            <_vW_9tVmQpLxZ7nR3aKs style={_h$.eW_6mQpZtLxV8nR3aKs}>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.eT_9xQmTrL7pZaVnK4s}>
                You have no stories available.
              </_tXt_3aKsQpLxVnZ8tRm2>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.eT_9xQmTrL7pZaVnK4s}>
                Stories are added after
              </_tXt_3aKsQpLxVnZ8tRm2>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.eT_9xQmTrL7pZaVnK4s}>
                houses are restored.
              </_tXt_3aKsQpLxVnZ8tRm2>
            </_vW_9tVmQpLxZ7nR3aKs>
          ) : (
            <>
              <_vW_9tVmQpLxZ7nR3aKs
                style={[_h$.cO_7qPzLxVnT3mA9rKb, { marginTop: 204 }]}
              >
                <_iMg_6tVmQpLxZ7nR3aKs
                  source={_cr_7nR3aKsQpLxV8tZm.image}
                  style={{
                    position: 'absolute',
                    top: -180,
                    alignSelf: 'center',
                    zIndex: 10,
                  }}
                  resizeMode="contain"
                />
                <LinearGradient
                  colors={['#FEE1BE', '#F8BF7B']}
                  style={_h$.cC_6mQpZtLxV8nR3aKs}
                >
                  <_vW_9tVmQpLxZ7nR3aKs style={{ padding: 16 }}>
                    <_vW_9tVmQpLxZ7nR3aKs style={_h$.dB_9xQmTrL7pZaVnK4s}>
                      <_vW_9tVmQpLxZ7nR3aKs
                        style={{ padding: 20, paddingTop: 60 }}
                      >
                        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.sT_2Rm9xQpLzT7nVaKs}>
                          {_cr_7nR3aKsQpLxV8tZm.title}
                        </_tXt_3aKsQpLxVnZ8tRm2>
                        <_tXt_3aKsQpLxVnZ8tRm2 style={_h$.sB_6mQpZtLxV8nR3aKs}>
                          {_cr_7nR3aKsQpLxV8tZm.body}
                        </_tXt_3aKsQpLxVnZ8tRm2>
                      </_vW_9tVmQpLxZ7nR3aKs>
                    </_vW_9tVmQpLxZ7nR3aKs>
                  </_vW_9tVmQpLxZ7nR3aKs>
                </LinearGradient>
              </_vW_9tVmQpLxZ7nR3aKs>

              <_vW_9tVmQpLxZ7nR3aKs style={_h$.bR_7qPzLxVnT3mA9rKb}>
                <_0xIb_7nR3aKsQpLxV8tZm
                  onPress={_sh_4pLxQnZ8tVmR2aKs}
                  icon={require('../../assets/images/sharebtn.png')}
                />
                <_0xNb_4pLxQnZ8tVmR2aKs onPress={_nx_6mQpZtLxV8nR3aKs} />
              </_vW_9tVmQpLxZ7nR3aKs>
            </>
          )}
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

  eW_6mQpZtLxV8nR3aKs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  eT_9xQmTrL7pZaVnK4s: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1b1b1b',
    textAlign: 'center',
    marginTop: 10,
  },

  cO_7qPzLxVnT3mA9rKb: {
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 18,
  },
  cC_6mQpZtLxV8nR3aKs: { width: '100%', maxWidth: 360, borderRadius: 30 },

  dB_9xQmTrL7pZaVnK4s: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: 'rgba(124,58,32,0.55)',
    borderStyle: 'dashed',
  },

  sT_2Rm9xQpLzT7nVaKs: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#260C04',
    marginBottom: 15,
  },
  sB_6mQpZtLxV8nR3aKs: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#260C04',
    lineHeight: 20,
  },

  bR_7qPzLxVnT3mA9rKb: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  nB_6mQpZtLxV8nR3aKs: {
    width: 122,
    height: 37,
    borderRadius: 50,
    backgroundColor: '#E99938',
    borderWidth: 2,
    borderColor: '#260C04',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nT_9xQmTrL7pZaVnK4s: { fontSize: 16, fontWeight: '500', color: '#260C04' },
});
