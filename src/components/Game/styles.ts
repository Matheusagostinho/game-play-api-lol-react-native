import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
 
 
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom:5,
    marginLeft:10
  },


 
  image:{
    height: 250,
    width: "100%",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});