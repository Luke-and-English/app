type Colors =
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'bodySecondary'
  | 'bodyText'
  | 'gray_400'
  | 'gray_500'
  | 'lightInk'
  | 'lightPrimary'
  | 'whitesmoke_100'
  | 'whitesmoke_200'
  | 'stroke'
  | 'actionColor'
  | 'dimgray'
  | 'silver_100'
  | 'lavender'
  | 'gainsboro_100'
  | 'gainsboro_200'
  | 'thistle'
  | 'sucess'
  | 'linen'
  | 'alert'
  | 'coral'
  | 'lightSecondary'
  | 'disabled'
  | 'pink'
  | 'oldlace'
  | 'yellow'
  | 'additional'
  | 'beige'
  | 'greenyellow'
  | 'dot'
  | 'success50'
  | 'transparent'
  | 'lightsteelblue';

export default {
  gray_100: '#fafafa',
  gray_200: '#909090',
  gray_300: '#98907c',
  bodySecondary: '#7c7c7c',
  bodyText: '#1d1d1d',
  gray_400: 'rgba(251, 251, 251, 0.92)',
  gray_500: 'rgba(255, 255 , 255, 0.37)',
  lightInk: '#000',
  lightPrimary: '#fff',
  whitesmoke_100: '#f9f9f9',
  whitesmoke_200: '#f5f5f5',
  stroke: '#f0f0f0',
  actionColor: '#2da6ff',
  dimgray: '#636363',
  dot: '#D9D9D9',
  silver_100: '#c8c8c8',
  lavender: '#fae0fb',
  gainsboro_100: '#e6e6e6',
  gainsboro_200: '#e4e4e4',
  thistle: '#d6c7ff',
  sucess: '#51b800',
  success50: ' rgba(81, 184, 0, 0.3)',
  linen: '#f4f0e6',
  alert: '#d42b2b',
  coral: '#ee6f3a',
  lightSecondary: '#aeb3be',
  disabled: '#aeaeae',
  pink: '#ffd0d0',
  oldlace: '#fdf6e7',
  yellow: '#e2f601',
  additional: '#e88baa',
  beige: '#eae6c8',
  greenyellow: '#ccff00',
  lightsteelblue: '#c0d4ff',
  transparent: 'transparent',
} as Record<Colors, string>;
