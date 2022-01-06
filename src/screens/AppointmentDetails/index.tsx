import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

import {
  ImageBackground,
  Text,
  View,
  Alert,
  FlatList,
  Share,
  Platform
} from 'react-native';

import BannerImg from '../../assets/banner.png';

import { styles } from './styles';


import { AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member, MemberProps } from '../../components/Member';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];  
}

export function AppointmentDetails(){
  const widget={
    members:[{
      id: '001',
      username: 'Matheus Agostinho',
      avatar_url: 'https://avatars.githubusercontent.com/u/54296216?s=96&v=4',
      status: 'ativo'
    },
    {
      id: '002',
      username: 'Luciano Soares',
      avatar_url: 'https://media-exp1.licdn.com/dms/image/C4D03AQFtdn7-FbNH2Q/profile-displayphoto-shrink_200_200/0/1593109476085?e=1646870400&v=beta&t=c1Cl-fb42kfbFILrwgUVKnK3WCVpCM6Ma4DZtSsI6HE',
      status: 'ativo'
    }],
    instant_invite :'aa'
  }
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

 

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' 
    ? `Junte-se a ${guildSelected.guild.name}`
    : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });    
  }

  function handleOpenGuild(){
    Linking.openURL(widget.instant_invite);
  }

  return (
    <Background>
      <Header 
        title="Detalhes"
        
        
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}> 
            { guildSelected.guild.name }
          </Text>

          <Text style={styles.subtitle}>
            { guildSelected.description }
          </Text>
        </View>
      </ImageBackground>

      {
        false  ? <Load /> :
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      }

      {
         guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon 
            title="Entrar na partida" 
            onPress={handleOpenGuild}
          />
        </View>
      }
    </Background>
  );
}