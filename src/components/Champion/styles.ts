import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    flexDirection:'row',
    paddingHorizontal: 24, 
  },
  
  containerItens: {
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    flex:1 ,
  },
  bottomLike:{

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  
  image:{
    height: 60,
    width: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});