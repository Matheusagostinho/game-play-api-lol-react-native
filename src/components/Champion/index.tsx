import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton  } from 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacityProps, TouchableOpacity } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { removeChampionInFavorites, saveChampionInFavorites } from '../../utils/ChampsIsFavorited';


export type ChampionProps = {
  id: string;
  name: string
  title:string
  image: {
    full: string
    sprite: string
  },
  blurb:string
  info:{
    attack: number
defense: number
difficulty: number
magic: number
  },
  alreadyFavorited: boolean
}

type Props = TouchableOpacityProps & {
  data: ChampionProps;

}



export function Champion({ data, ...rest }: Props) {


  const { primary, on, secondary50, secondary70, heading } = theme.colors;
 
  const [isLiked, setIsLiked] = useState(false)
  useEffect(() => {
   if(data.alreadyFavorited) setIsLiked(true)
   
  }, [])

  async function handleIsLike(){
    if(isLiked){
      const newChamp ={
        ...data,
        alreadyFavorited: false
      }
      await removeChampionInFavorites(newChamp)
      setIsLiked(false)
     
    }
    else 
    {
      const newChamp ={
        ...data,
        alreadyFavorited: true
      }
      await saveChampionInFavorites(newChamp)
      setIsLiked(true)
    }
    }

  return (
    <View  style={styles.container}>
    <TouchableOpacity
      style={styles.containerItens}
      activeOpacity={0.7}
      {...rest}
    >
           <Image 
        source={ {uri: `http://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/${data.id}.png`} }
        style={styles.image}
      />
      <View style={styles.content}>
      
     
      
       <Text style={styles.title}>{ data.name }</Text>
       <Text style={styles.subtitle}>{ data.title }</Text>
            
       </View>
       
     
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.bottomLike}
    activeOpacity={0.7}
    onPress={() => handleIsLike()}>  
    
    
      <AntDesign  
          name={isLiked?"heart": "hearto"}
          size={24}
          color={ isLiked? primary: heading}
        />
   
    </TouchableOpacity>
    </View>
    
  )

}