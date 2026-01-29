import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';
import { useState as _uST_6mQpZtLxV8nR3aKs } from 'react';
import {
  Image as _iMg_4pLxQnZ8tVmR2aKs,
  ImageBackground as _iBg_7nR3aKsQpLxV8tZm,
  ScrollView as _sCv_2Rm9xQpLzT7nVaKs,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  TouchableOpacity as _tOp_5pZtLxQnV8aKsR3m,
  useWindowDimensions as _uWD_9tVmQpLxZ7nR3aKs,
  View as _vW_1VaKsQpLxT7nR9mZ2,
} from 'react-native';

const _dBg_7qPzLxVnT3mA9rKb = [
  require('../../assets/images/dustloaderonbg.png'),
  require('../../assets/images/dustloaderonbg2.png'),
  require('../../assets/images/dustloaderonbg3.png'),
  require('../../assets/images/dustloaderonbg4.png'),
  require('../../assets/images/dustloaderonbg5.png'),
];

const _dTl_9xQmTrL7pZaVnK4s = [
  require('../../assets/images/dusttitle1.png'),
  require('../../assets/images/dusttitle2.png'),
  require('../../assets/images/dusttitle3.png'),
  require('../../assets/images/dusttitle4.png'),
  require('../../assets/images/dusttitle5.png'),
];

const _dLb_2Rm9xQpLzT7nVaKs = [
  'Continue',
  'Join Johnny',
  'Got it!',
  'Rebuild Town',
  'Start Adventure',
];

const DustRushOnboard = () => {
  const { height: _ht_9tVmQpLxZ7nR3aKs } = _uWD_9tVmQpLxZ7nR3aKs();
  const [_ix_4pLxQnZ8tVmR2aKs, _sIx_7nR3aKsQpLxV8tZm] =
    _uST_6mQpZtLxV8nR3aKs(0);
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();

  const _nx_2Rm9xQpLzT7nVaKs = () => {
    _ix_4pLxQnZ8tVmR2aKs === 4
      ? _nv_9xQmTrL7pZaVnK4s.replace('DustRushHome')
      : _sIx_7nR3aKsQpLxV8tZm(_ix_4pLxQnZ8tVmR2aKs + 1);
  };

  return (
    <_iBg_7nR3aKsQpLxV8tZm
      source={_dBg_7qPzLxVnT3mA9rKb[_ix_4pLxQnZ8tVmR2aKs]}
      style={{ flex: 1 }}
    >
      <_sCv_2Rm9xQpLzT7nVaKs
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <_tOp_5pZtLxQnV8aKsR3m
          style={{ position: 'absolute', top: 70, right: 40 }}
          activeOpacity={0.6}
          onPress={() => _nv_9xQmTrL7pZaVnK4s.replace('DustRushHome')}
        >
          <_iMg_4pLxQnZ8tVmR2aKs
            source={require('../../assets/images/skipBtn.png')}
          />
        </_tOp_5pZtLxQnV8aKsR3m>

        <_vW_1VaKsQpLxT7nR9mZ2
          style={{ flex: 1, marginTop: _ht_9tVmQpLxZ7nR3aKs * 0.2 }}
        >
          <_iMg_4pLxQnZ8tVmR2aKs
            source={_dTl_9xQmTrL7pZaVnK4s[_ix_4pLxQnZ8tVmR2aKs]}
          />

          <_vW_1VaKsQpLxT7nR9mZ2 style={_d$.bW_7qPzLxVnT3mA9rKb}>
            <_tOp_5pZtLxQnV8aKsR3m
              onPress={_nx_2Rm9xQpLzT7nVaKs}
              activeOpacity={0.7}
            >
              <_iBg_7nR3aKsQpLxV8tZm
                source={require('../../assets/images/dustonbtn.png')}
                style={_d$.bT_9xQmTrL7pZaVnK4s}
              >
                <_tXt_3aKsQpLxVnZ8tRm2 style={_d$.bTx_6mQpZtLxV8nR3aKs}>
                  {_dLb_2Rm9xQpLzT7nVaKs[_ix_4pLxQnZ8tVmR2aKs]}
                </_tXt_3aKsQpLxVnZ8tRm2>
              </_iBg_7nR3aKsQpLxV8tZm>
            </_tOp_5pZtLxQnV8aKsR3m>
          </_vW_1VaKsQpLxT7nR9mZ2>
        </_vW_1VaKsQpLxT7nR9mZ2>
      </_sCv_2Rm9xQpLzT7nVaKs>
    </_iBg_7nR3aKsQpLxV8tZm>
  );
};

const _d$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  bT_9xQmTrL7pZaVnK4s: {
    width: 194,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },

  bTx_6mQpZtLxV8nR3aKs: {
    color: '#FBC914',
    fontSize: 22,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },

  bW_7qPzLxVnT3mA9rKb: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 20,
    paddingBottom: 60,
  },
});

export default DustRushOnboard;
