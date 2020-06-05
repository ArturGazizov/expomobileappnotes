import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView ,StyleSheet,  Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  { Component, useState } from 'react';


import AwesomeAlert from 'react-native-awesome-alerts';

const Note = (props) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text>{props.text}</Text>
    </View>
  );
}


const createAlert = () =>
    {return (<AwesomeAlert message="alerting"/>)};




const createThreeButtonAlert = () =>
    Alert.alert(
      "Same note",
      "Same note already exists",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );




class NoteList extends React.Component {
constructor(props) {
    super(props)}
    
render()
  {return (
    <View>
      <ScrollView style={{flex: 0.3}}>
 {this.props.notes.map((anote,id) =><Note key={id} text={anote} />)}
     </ScrollView>
      <Button title="To Adding" onPress={() => this.props.navigation.navigate('Adding')} />

    </View>
  );
}
}

const MenuScreen = () => {
  return (
    <View>
      <Text>Menu Screen</Text>
    </View>
  );
}

class AddingScreen extends React.Component {
  constructor(props) {
    super(props)}
  render(){
  return (
    <View>
    <TextInput
      placeholder="write a note"
      onChangeText={text => {this.props.onChangeText(text);}}
      value={this.props.value}
    />

<Button title="Send a note" onPress={() => {if (this.props.notes.find(it=>it==this.props.value)) {createThreeButtonAlert()} else {this.props.onChangeNotes([...this.props.notes,this.props.value]);this.props.onChangeText("")}    }} />


<Button title="To List" onPress={() => this.props.navigation.navigate('notes')} />

    </View>
  );}
}

const Stack = createStackNavigator();







export default function App() {

    const [value, onChangeText] = React.useState('');
    const [notes, onChangeNotes] = React.useState([
    "The note0","The note1","The note2","The note3","The note4","The note5","The note6","The note7","The note8","The note9",
    "The note10","The note11","The note12","The note13","The note14","The note15","The note16","The note17","The note18","The note19",
    ]);

  
  return (
    <View style={{justifyContent: 'space-between',alignItems: 'stretch',}}>
<NavigationContainer style={{flex: 1}}>
      <Stack.Navigator initialRouteName="" style={{flex: 0}}>
        <Stack.Screen name="notes" style={{flex: 0}}>
        {props => <NoteList {...props} notes={notes} />}</Stack.Screen>
        <Stack.Screen name="Menus" component={MenuScreen} />
        <Stack.Screen name="Adding" >
        {props => <AddingScreen {...props} notes={notes} value={value} onChangeText={onChangeText} onChangeNotes={onChangeNotes} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

     <ActivityIndicator style={{flex: 0.3, flexDirection: 'column'}} animating={true} />

        <ScrollView style={{flex: 0.3}}>
        {notes.map((anote,id) =><Note style={{flex: 0.1}} key={id} text={anote} />)}
</ScrollView>

 <TextInput
 style={styles.container2}
      placeholder="write a note"
      onChangeText={text => {onChangeText(text);}}
      value={value}
    />
<Button style={styles.container} title="Send a note" onPress={() => {if (notes.find(it=>it==value)) {createThreeButtonAlert()} else {onChangeNotes([...notes,value]);onChangeText("")}    }} />
<Button style={{flex: 0.1}} title="alert from react native" onPress={()=>Alert.alert('foo')}/>
<Button style={{flex: 0.1}} title="alert component from react native" onPress={createThreeButtonAlert}/>
<Button style={{flex: 0.1}} title="awesome alert from react native" onPress={createAlert}/>





         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 0.1, flexDirection: 'column'},
  container2: {flex: 0.1, flexDirection: 'column'},
  white:{color:'white',flex:0}

});
//




/*



*/