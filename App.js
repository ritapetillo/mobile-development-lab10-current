import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Questions from './components/Questions/Questions';
import Summary from './components/Summary/Summary';
import { color } from '@rneui/base';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Questions" 
        component={Questions} 
        options = {{
          headerStyle: {
            backgroundColor: 'lightgray',
          },
          //back button and header text color
          headerTintColor: 'black'
        }}
        />
        <Stack.Screen 
        name="Summary" 
        component={Summary} 
        options = {{
          headerStyle: {
            backgroundColor: 'gray',
          },
          headerTintColor: 'white'
        }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
