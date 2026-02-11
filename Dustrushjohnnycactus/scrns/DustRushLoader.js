import React, {
  useEffect as _uEF_7qPzLxVnT3mA9rKb,
  useState as _uST_6mQpZtLxV8nR3aKs,
} from 'react';
import {
  View as _vW_9tVmQpLxZ7nR3aKs,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Image as _iMg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_2Rm9xQpLzT7nVaKs,
  ImageBackground as _iBg_7nR3aKsQpLxV8tZm,
} from 'react-native';
import { WebView as _wV_5pZtLxQnV8aKsR3m } from 'react-native-webview';
import { useNavigation as _uNV_9xQmTrL7pZaVnK4s } from '@react-navigation/native';

const _ld_3aKsQpLxVnZ8tRm2 = `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
    />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
  
      .pencil {
        display: block;
        width: 160px;
        height: 160px;
      }
  
      .pencil__body1,
      .pencil__body2,
      .pencil__body3,
      .pencil__eraser,
      .pencil__eraser-skew,
      .pencil__point,
      .pencil__rotate,
      .pencil__stroke {
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
  
      .pencil__body1,
      .pencil__body2,
      .pencil__body3 {
        transform: rotate(-90deg);
      }
  
      .pencil__body1 { animation-name: pencilBody1; }
      .pencil__body2 { animation-name: pencilBody2; }
      .pencil__body3 { animation-name: pencilBody3; }
  
      .pencil__eraser {
        animation-name: pencilEraser;
        transform: rotate(-90deg) translate(49px, 0);
      }
  
      .pencil__eraser-skew {
        animation-name: pencilEraserSkew;
        animation-timing-function: ease-in-out;
      }
  
      .pencil__point {
        animation-name: pencilPoint;
        transform: rotate(-90deg) translate(49px, -30px);
      }
  
      .pencil__rotate { animation-name: pencilRotate; }
  
      .pencil__stroke {
        animation-name: pencilStroke;
        transform: translate(100px, 100px) rotate(-113deg);
      }
  
      @keyframes pencilBody1 {
        from, to { stroke-dashoffset: 351.86; transform: rotate(-90deg); }
        50% { stroke-dashoffset: 150.8; transform: rotate(-225deg); }
      }
      @keyframes pencilBody2 {
        from, to { stroke-dashoffset: 406.84; transform: rotate(-90deg); }
        50% { stroke-dashoffset: 174.36; transform: rotate(-225deg); }
      }
      @keyframes pencilBody3 {
        from, to { stroke-dashoffset: 296.88; transform: rotate(-90deg); }
        50% { stroke-dashoffset: 127.23; transform: rotate(-225deg); }
      }
      @keyframes pencilEraser {
        from, to { transform: rotate(-45deg) translate(49px, 0); }
        50% { transform: rotate(0deg) translate(49px, 0); }
      }
      @keyframes pencilEraserSkew {
        from, 32.5%, 67.5%, to { transform: skewX(0); }
        35%, 65% { transform: skewX(-4deg); }
        37.5%, 62.5% { transform: skewX(8deg); }
        40%, 45%, 50%, 55%, 60% { transform: skewX(-15deg); }
        42.5%, 47.5%, 52.5%, 57.5% { transform: skewX(15deg); }
      }
      @keyframes pencilPoint {
        from, to { transform: rotate(-90deg) translate(49px, -30px); }
        50% { transform: rotate(-225deg) translate(49px, -30px); }
      }
      @keyframes pencilRotate {
        from { transform: translate(100px, 100px) rotate(0); }
        to { transform: translate(100px, 100px) rotate(720deg); }
      }
      @keyframes pencilStroke {
        from {
          stroke-dashoffset: 439.82;
          transform: translate(100px, 100px) rotate(-113deg);
        }
        50% {
          stroke-dashoffset: 164.93;
          transform: translate(100px, 100px) rotate(-113deg);
        }
        75%, to {
          stroke-dashoffset: 439.82;
          transform: translate(100px, 100px) rotate(112deg);
        }
      }
    </style>
  </head>
  <body>
    <svg class="pencil" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="pencil-eraser">
          <rect rx="5" ry="5" width="30" height="30" />
        </clipPath>
      </defs>
  
      <circle class="pencil__stroke"
        r="70"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-dasharray="439.82 439.82"
        stroke-dashoffset="439.82"
        stroke-linecap="round"
        transform="rotate(-113,100,100)"
      />
  
      <g class="pencil__rotate" transform="translate(100,100)">
        <g fill="none">
          <circle class="pencil__body1"
            r="64"
            stroke="hsl(30, 30%, 50%)"
            stroke-width="30"
            stroke-dasharray="402.12 402.12"
            stroke-dashoffset="402"
            transform="rotate(-90)"
          />
          <circle class="pencil__body2"
            r="74"
            stroke="hsl(30, 30%, 60%)"
            stroke-width="10"
            stroke-dasharray="464.96 464.96"
            stroke-dashoffset="465"
            transform="rotate(-90)"
          />
          <circle class="pencil__body3"
            r="54"
            stroke="hsl(30, 30%, 40%)"
            stroke-width="10"
            stroke-dasharray="339.29 339.29"
            stroke-dashoffset="339"
            transform="rotate(-90)"
          />
        </g>
  
        <g class="pencil__eraser" transform="rotate(-90) translate(49,0)">
          <g class="pencil__eraser-skew">
            <rect fill="hsl(30, 20%, 90%)" rx="5" ry="5" width="30" height="30" />
            <rect fill="hsl(30, 20%, 85%)" width="5" height="30" clip-path="url(#pencil-eraser)" />
            <rect fill="hsl(30, 20%, 80%)" width="30" height="20" />
            <rect fill="hsl(30, 20%, 75%)" width="15" height="20" />
            <rect fill="hsl(30, 20%, 85%)" width="5" height="20" />
            <rect fill="hsla(30, 20%, 75%, 0.2)" y="6" width="30" height="2" />
            <rect fill="hsla(30, 20%, 75%, 0.2)" y="13" width="30" height="2" />
          </g>
        </g>
  
        <g class="pencil__point" transform="rotate(-90) translate(49,-30)">
          <polygon fill="hsl(33,90%,70%)" points="15 0,30 30,0 30" />
          <polygon fill="hsl(33,90%,50%)" points="15 0,6 30,0 30" />
          <polygon fill="hsl(223,10%,10%)" points="15 0,20 10,10 10" />
        </g>
      </g>
    </svg>
  </body>
  </html>`;

const DustRushLoader = () => {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();

  const [_shL_6mQpZtLxV8nR3aKs, _sShL_7nR3aKsQpLxV8tZm] =
    _uST_6mQpZtLxV8nR3aKs(true);
  const [_shI_4pLxQnZ8tVmR2aKs, _sShI_9tVmQpLxZ7nR3aKs] =
    _uST_6mQpZtLxV8nR3aKs(false);

  _uEF_7qPzLxVnT3mA9rKb(() => {
    const _tN_8tVmQpLxZ7nR3aKs = setTimeout(() => {
      try {
        _nv_9xQmTrL7pZaVnK4s.replace('DustRushOnboard');
      } catch (err) {
        _nv_9xQmTrL7pZaVnK4s.navigate('DustRushOnboard');
      }
    }, 7500);

    return () => {
      clearTimeout(_tN_8tVmQpLxZ7nR3aKs);
    };
  }, [_nv_9xQmTrL7pZaVnK4s]);

  return (
    <_iBg_7nR3aKsQpLxV8tZm
      source={require('../../assets/images/dustloaderBack.png')}
      style={{ flex: 1 }}
    >
      <_sCv_2Rm9xQpLzT7nVaKs
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {_shL_6mQpZtLxV8nR3aKs && (
          <_vW_9tVmQpLxZ7nR3aKs style={_d$.wW_9xQmTrL7pZaVnK4s}>
            <_wV_5pZtLxQnV8aKsR3m
              originWhitelist={['*']}
              source={{ html: _ld_3aKsQpLxVnZ8tRm2 }}
              style={_d$.wV_6mQpZtLxV8nR3aKs}
              scrollEnabled={false}
            />
          </_vW_9tVmQpLxZ7nR3aKs>
        )}
      </_sCv_2Rm9xQpLzT7nVaKs>
    </_iBg_7nR3aKsQpLxV8tZm>
  );
};

const _d$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  lW_7qPzLxVnT3mA9rKb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wW_9xQmTrL7pZaVnK4s: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
  },

  wV_6mQpZtLxV8nR3aKs: {
    width: 360,
    height: 130,
    backgroundColor: 'transparent',
  },
});

export default DustRushLoader;
