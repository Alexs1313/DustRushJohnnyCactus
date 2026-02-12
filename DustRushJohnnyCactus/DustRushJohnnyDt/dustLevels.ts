import type { ImageSourcePropType } from 'react-native';

export type DustLevel = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  correctCount: number;
};

export const dustLevels: DustLevel[] = [
  { id: 1, title: 'Level 1', image: require('../../assets/images/dustlevel1.png'), correctCount: 5 },
  { id: 2, title: 'Level 2', image: require('../../assets/images/dustlevel2.png'), correctCount: 8 },
  { id: 3, title: 'Level 3', image: require('../../assets/images/dustlevel3.png'), correctCount: 8 },
  { id: 4, title: 'Level 4', image: require('../../assets/images/dustlevel4.png'), correctCount: 4 },
  { id: 5, title: 'Level 5', image: require('../../assets/images/dustlevel5.png'), correctCount: 10 },
  { id: 6, title: 'Level 6', image: require('../../assets/images/dustlevel6.png'), correctCount: 15 },
  { id: 7, title: 'Level 7', image: require('../../assets/images/dustlevel7.png'), correctCount: 11 },
  { id: 8, title: 'Level 8', image: require('../../assets/images/dustlevel8.png'), correctCount: 4 },
];
