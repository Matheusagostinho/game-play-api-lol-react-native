import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';

import { Profile } from '../../components/Profile';

import { styles } from './styles';
import api from '../../services/api';
import { Champion, ChampionProps } from '../../components/Champion';
import { Load } from '../../components/Load';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ButtonHome } from '../../components/ButtonHome';
import { loadFavorites } from '../../utils/ChampsIsFavorited';

import { COLLECTION_FAVORITES } from '../../configs/database';



export function Favorites() {
  const [champions, setChampions] = useState([]  as ChampionProps[]);
  const [loading, setLoading] = useState(true);


  const navigation = useNavigation();

 

  useEffect(() => {
    async function fetchChampions() {
      const storage =  await loadFavorites() 
      const champions = storage.filter((champion) => champion.alreadyFavorited)

      setChampions(champions)
      setLoading(false)
    }
    fetchChampions()
   
  }, [champions])

  useFocusEffect(useCallback(() => {
    loadFavorites();
  },[champions]));

  function handleHome() {
    navigation.navigate('Home');
  } 
 function handleChampionDetails(champSelected: ChampionProps) {
  navigation.navigate('ChampionDetails', { champSelected });
} 

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonHome onPress={handleHome}/>
      </View>

      <ListHeader 
          title="Favoritos"
          subtitle={`Total ${champions.length}`}
         
        />  

{
      loading ? <Load /> :
      <>

        <FlatList 
        
          data={champions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
           <Champion data={item}  onPress={() => handleChampionDetails(item)}/>     
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </>
      }
        
  
    </Background>
  );  
}