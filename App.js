import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.30, backgroundColor:'white', justifyContent: "center", marginLeft: 50}}>

      <Image style={{alignContent: "center"}} source = {require('./Logo.jpeg')}/>
  
      </View>

      <View style={{flex:0.15, backgroundColor:'purple', justifyContent: "center"}}>
      <Text style={{backgroundColor:'purple', color: 'white', fontSize: 30, textAlign: "center"}}>Login page</Text>
      </View>
      
        <View style={{flex:0.25,justifyContent: "center", backgroundColor:'pink'}}>
      <TextInput
 backgroundColor= "white"
 //lets check git
/>  
</View> 
<View style={{flex:0.05, backgroundColor:'pink'}}> 
<TextInput
 backgroundColor= "white"
/>

      </View>
      <View style={{flex:0.25, backgroundColor:'pink', justifyContent: "center"}}>
      <Button
  
  title="Login"
  color="#841584"
/>
      </View>
    </View>
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
