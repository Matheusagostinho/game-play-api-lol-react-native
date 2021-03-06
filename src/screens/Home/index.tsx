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
import { loadFavorites } from '../../utils/ChampsIsFavorited';





export function Home() {
  const [champions, setChampions] = useState([]  as ChampionProps[]);
  const [loading, setLoading] = useState(true);


  const navigation = useNavigation();
  
 

  useEffect(() => {
    async function fetchChampions() {
      const response = await api.get(`champion.json`)
      const data = response.data.data
      const champStored =  await loadFavorites() 
      const champ = Object.keys(data).map((key) => data[key]);
      const champions = champ.map((champion) => {
        const item =  champStored.find(i => i.id ===  champion.id) 
        
      
        return{
          ...champion,
          alreadyFavorited: item?.id ===  champion.id ? true : false
      
      }
      
      })
    
     
      setChampions(champions)
      setLoading(false)
    }

    fetchChampions()
   
  }, [champions])
  useFocusEffect(useCallback(() => {
    loadFavorites();
  },[champions]));


  function handleChampionFavorites() {
    navigation.navigate('ChampionFavorites');
  } 
 function handleChampionDetails(champSelected: ChampionProps) {
  navigation.navigate('ChampionDetails', { champSelected });
} 

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleChampionFavorites}/>
      </View>

      <ListHeader 
          title="Campe??es"
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