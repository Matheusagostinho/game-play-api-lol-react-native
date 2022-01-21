import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Avatar } from '../Avatar';



import { styles } from './styles';

export function Profile() {

  const navigation = useNavigation();
  const user = {
    avatar:"https://avatars.githubusercontent.com/u/54296216?s=96&v=4",
    firstName: "Matheus Agostinho"
  }
  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () =>  navigation.navigate('SignIn')
      }
    ])
  }

  return (
    <View style={styles.container}>
    
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          
          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>

        <Text style={styles.message}>
          Seu Campeão favorito é o Draven
        </Text>
      </View>

    </View>
  )

}