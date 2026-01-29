import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';
import React from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Image as _iMg_4pLxQnZ8tVmR2aKs,
  ImageBackground as _iBg_7nR3aKsQpLxV8tZm,
  Pressable as _pRs_6mQpZtLxV8nR3aKs,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
  ScrollView as _sCv_4pLxQnZ8tVmR2aKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const _bg_6tVmQpLxZ7nR3aKs = require('../../assets/images/dusthomeappbg.png');
const _hr_1VaKsQpLxT7nR9mZ2 = require('../../assets/images/dustcactus.png');

const _0xDsNvBt_7qPzLxVnT3mA9rKb = ({
  title: _tt_6mQpZtLxV8nR3aKs,
  onPress: _oP_4pLxQnZ8tVmR2aKs,
}) => {
  return (
    <_pRs_6mQpZtLxV8nR3aKs
      onPress={_oP_4pLxQnZ8tVmR2aKs}
      style={({ pressed: _pr_9tVmQpLxZ7nR3aKs }) => [
        _d$.bT_7nR3aKsQpLxV8tZm,
        _pr_9tVmQpLxZ7nR3aKs && _d$.bTP_2Rm9xQpLzT7nVaKs,
      ]}
    >
      <LinearGradient
        colors={['#DB8F4C', '#A9462F']}
        style={_d$.bIn_6tVmQpLxZ7nR3aKs}
      >
        <_tXt_3aKsQpLxVnZ8tRm2
          style={_d$.bTx_4pLxQnZ8tVmR2aKs}
          numberOfLines={1}
        >
          {_tt_6mQpZtLxV8nR3aKs}
        </_tXt_3aKsQpLxVnZ8tRm2>
      </LinearGradient>
    </_pRs_6mQpZtLxV8nR3aKs>
  );
};

const _0xDsHm_9xQmTrL7pZaVnK4s = () => {
  const { height: _ht_2Rm9xQpLzT7nVaKs } = _uWD_2Rm9xQpLzT7nVaKs();
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();

  return (
    <_iBg_7nR3aKsQpLxV8tZm
      source={_bg_6tVmQpLxZ7nR3aKs}
      style={_d$.bg_6mQpZtLxV8nR3aKs}
      resizeMode="cover"
    >
      <_sCv_4pLxQnZ8tVmR2aKs
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs style={_d$.ct_7qPzLxVnT3mA9rKb}>
          <_vW_9tVmQpLxZ7nR3aKs style={_d$.hW_9xQmTrL7pZaVnK4s}>
            <_iMg_4pLxQnZ8tVmR2aKs
              source={require('../../assets/images/bgcactusgr.png')}
              style={{ top: 50 }}
            />
            <_iMg_4pLxQnZ8tVmR2aKs
              source={_hr_1VaKsQpLxT7nR9mZ2}
              style={{
                position: 'absolute',
                bottom: 20,
              }}
              resizeMode="contain"
            />
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_d$.mn_3aKsQpLxVnZ8tRm2}>
            <_0xDsNvBt_7qPzLxVnT3mA9rKb
              title="Dust Hunt"
              onPress={() => {
                _nv_9xQmTrL7pZaVnK4s.navigate('DustLevelsScreen');
              }}
            />
            <_0xDsNvBt_7qPzLxVnT3mA9rKb
              title="Cactus Town"
              onPress={() => {
                _nv_9xQmTrL7pZaVnK4s.navigate('DustCactusTownScreen');
              }}
            />
            <_0xDsNvBt_7qPzLxVnT3mA9rKb
              title="Cactus Stories"
              onPress={() => {
                _nv_9xQmTrL7pZaVnK4s.navigate('DustCactusStoriesScreen');
              }}
            />
            <_0xDsNvBt_7qPzLxVnT3mA9rKb
              title="Hat Vault"
              onPress={() => {
                _nv_9xQmTrL7pZaVnK4s.navigate('DustHatVaultScreen');
              }}
            />
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_4pLxQnZ8tVmR2aKs>
    </_iBg_7nR3aKsQpLxV8tZm>
  );
};

const _d$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  bg_6mQpZtLxV8nR3aKs: { flex: 1 },

  ct_7qPzLxVnT3mA9rKb: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mn_3aKsQpLxVnZ8tRm2: {
    width: '100%',
    paddingBottom: 26,
    gap: 14,
    alignItems: 'center',
  },

  bT_7nR3aKsQpLxV8tZm: {
    width: '72%',
    maxWidth: 276,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#824021',
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },

  bTP_2Rm9xQpLzT7nVaKs: { transform: [{ scale: 0.98 }], opacity: 0.95 },

  bIn_6tVmQpLxZ7nR3aKs: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 73,
    borderRadius: 11,
  },

  bTx_4pLxQnZ8tVmR2aKs: {
    fontSize: 22,
    fontWeight: '900',
    color: '#f2e01cff',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
    letterSpacing: 0.2,
  },

  hW_9xQmTrL7pZaVnK4s: {},
});

export default _0xDsHm_9xQmTrL7pZaVnK4s;
