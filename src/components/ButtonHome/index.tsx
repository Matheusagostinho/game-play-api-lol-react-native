import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function ButtonHome({...rest}: RectButtonProps) {
  const {heading } = theme.colors;
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
     <Entypo name="home"
          size={24}
          color={heading}
        />
    </RectButton>
  )
}