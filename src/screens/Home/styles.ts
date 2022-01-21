import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matches: {    
    marginTop: 24,
    paddingTop: 24,
    marginLeft: 24,
    marginRight: 24,
  },

  bottom:{
    width: '100%',
    paddingHorizontal: 24,
    paddingTop:24,
    borderTopColor:'#171F52',
    borderTopWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginBottom: 20,
  }
});