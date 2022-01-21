import React from 'react';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';


import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function SignIn(){

  const navigation = useNavigation();
  const loading = false

   function handleSignIn() {
   
      navigation.navigate('Home');
    
  }

  return(
    <Background>
      <View style={styles.container}>     
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
           Informações {'\n'}
           de todos os {'\n'} 
           Campeões
          </Text>

          <Text style={styles.subtitle}>
           Seu Campeão{'\n'} 
            na palma da suas mãos
          </Text>

          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon 
              title="Entrar "
              onPress={handleSignIn}
            />  
          }                             
        </View>
      </View>
    </Background>
  );
}