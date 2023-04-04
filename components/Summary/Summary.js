import { StyleSheet, View,  Text,  } from 'react-native';
import { ButtonGroup } from '@rneui/themed';


export default function Summary( {route}) {

  const {quizChoicesResults, quizPrompt} = route.params

  return (
    <View style = {styles.container}>
      <Text>{quizPrompt}</Text>
      <Text>{quizChoicesResults}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
