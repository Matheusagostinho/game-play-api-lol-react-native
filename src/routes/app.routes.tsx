import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { ChampionDetails } from '../screens/ChampionDetails';

import { SignIn } from '../screens/SignIn';
import { Favorites } from '../screens/Favorites';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >  
      <Screen 
        name="SignIn"
        component={SignIn}
      />
    
      <Screen 
        name="Home"
        component={Home}
      />
      
     
      <Screen 
        name="ChampionDetails"
        component={ChampionDetails}
      />
        <Screen 
        name="ChampionFavorites"
        component={Favorites}
      />
         
    </Navigator>
  )
}