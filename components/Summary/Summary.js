import { StyleSheet, View,  Text, ScrollView,  } from 'react-native';
import { ButtonGroup } from '@rneui/themed';


export default function Summary( {route}) {

  const {quiz} = route.params
  console.log(route.params)
  return (
    <View style = {styles.container}>
      <ScrollView>{quiz?.map((item, index)=> 
      <View key = {index}>
        <Text>{item.prompt}</Text>
        <View>{item.choices?.map((choice , index) => 
          <Text key = {index}>
            {choice}
          </Text>
          )}
        </View>
      </View>
      )}   
    </ScrollView> 
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
