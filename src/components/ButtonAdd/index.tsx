import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function ButtonAdd({...rest}: RectButtonProps) {
  const {heading } = theme.colors;
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <AntDesign  
          name="heart"
          size={24}
          color={heading}
        />
    </RectButton>
  )
}