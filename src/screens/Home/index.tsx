import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';

import { Profile } from '../../components/Profile';
import { games } from '../../utils/games';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Game } from '../../components/Game';

export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);


  const navigation = useNavigation();



 function  handleAppointments(){
  navigation.navigate('Appointments');
 }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
       
      </View>

      <ListHeader 
          title="Meus Principais Jogos"
          subtitle={`Total ${games.length}`}
        />

        <FlatList 
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Game 
              data={item} 
              //onPress={() => handleAppointmentDetails(item)}
            />            
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
  <View style={styles.bottom}>
        <ButtonIcon
              title="Ver Partidas Agendadas "
              onPress={handleAppointments}
            />  
    </View>
  
    </Background>
  );  
}