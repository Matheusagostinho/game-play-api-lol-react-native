import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { GuildProps } from '../Guild';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';


export type AppointmentProps = {
  id: string;
  title: string
  image: string
}

type Props = RectButtonProps & {
  data: AppointmentProps;
} 

export function Game({ data, ...rest }: Props) {


  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
      <Text style={styles.title}>
              { data.title }
            </Text>
          <Image 
        source={ {uri: data.image} }
        style={styles.image}
      />
       

      </View>
    </RectButton>
  )

}