import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

import {
  ImageBackground,
  Text,
  View} from 'react-native';


import { styles } from './styles';



import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { ChampionProps } from '../../components/Champion';
import api from '../../services/api';
import { theme } from '../../global/styles/theme';

type Params = {
  champSelected: ChampionProps
}

type ChampProps = {
  lore: string
}

export function ChampionDetails(){
  const { primary, on, secondary50, secondary70 } = theme.colors;

   
  const [loading, setLoading] = useState(true);
  const [lore, setLore] = useState('true');
  const route = useRoute();
  const { champSelected} = route.params as Params;

  useEffect(() => {
    async function fetchChampions() {
      const response = await api.get(`champion/${champSelected.id}.json`)
      const champ = Object.values(response.data.data) as Array<ChampProps>
      const lore  = champ[0].lore 
     setLore(lore)
      setLoading(false)
    }

    fetchChampions()
   
  }, [])



 
  return (
    <Background>
      <Header 
        title="Detalhes"
        
      />

      <ImageBackground 
        source={{uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champSelected.id}_0.jpg`}}
        style={styles.banner}
      >
        
       
        
      </ImageBackground>

      <View
        style={styles.content}
      >
        <View style={styles.headerName}> 
        <Text style={styles.name}> 
            { champSelected.name }
          </Text>

          <Text style={styles.subtitle}>
            { champSelected.title }
          </Text>
        </View>
         {
           loading ?<Load/> :(
            <View>
              <Text style={styles.title}>
                Lore
              </Text>
              <Text style={styles.subtitle}>
                  { lore }
              </Text>
              <View style={styles.info}>
              
              <View style={styles.itemInfo}>
                  <MaterialCommunityIcons name="sword-cross" size={20} color={primary} />
                  <Text style={styles.titleInfo}>Ataque:</Text>
                  <Text style={styles.subtitleInfo}>{champSelected.info.attack}/10</Text>   
              </View>
              <View style={styles.itemInfo}>
                <Entypo name="shield" size={20} color={primary}/>
                <Text style={styles.titleInfo}>Defesa:</Text>
                <Text style={styles.subtitleInfo}>{champSelected.info.defense}/10</Text>   
              </View>
              <View style={styles.itemInfo}>
                <FontAwesome5 name="magic" size={20} color={primary}  />
                <Text style={styles.titleInfo}>Magia:</Text>
                <Text style={styles.subtitleInfo}>{champSelected.info.magic}/10</Text>   
              </View>
              <View style={styles.itemInfo}>
                  <FontAwesome name="gears" size={20} color={primary}  /> 
                  <Text style={styles.titleInfo}>Dificuldade: </Text>    
                  <Text style={styles.subtitleInfo}>{champSelected.info.difficulty}/10</Text>    
              </View>
                
            </View>
            </View>
           )
         }
        
      </View>
      
    </Background>
  );
}