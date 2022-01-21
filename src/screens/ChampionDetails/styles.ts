import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
  },
  headerName: {
    marginTop:-20,
    justifyContent: 'center',
    alignItems:"center",
    
    marginBottom: 20
  },
  content: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 27
  },
  name: {
    fontSize: 32,
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.discord
  },
  titleInfo: {
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.discord,
    marginHorizontal:3,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    lineHeight: 21
  },
info:{
 
  marginTop:20,
  flexWrap: 'wrap',
},
subtitleInfo: {
  fontSize: 24,
  fontFamily: theme.fonts.title700,
  color: theme.colors.on
},
itemInfo:{
  marginVertical:5,
flexDirection:"row",
alignItems:"center",
},
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
});