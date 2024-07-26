import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,Text,StyleSheet } from "react-native";
export default function App(){
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={{width:'250px', height:"60px"}}source={require('./assets/logoGustavo.png')}/>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.inputArea} 
        placeholder="USUÁIO" autoCorrect={false}
        onChangeText={() => {}}>
        </TextInput>
        <TextInput placeholder="SENHA"type="password" autoCorrect={false} style={styles.inputArea} 
        onChangeText={() => {}}>
        </TextInput>
        <TouchableOpacity style={styles.btnsubmit}><Text style={styles.textsubmit}>LOGAR</Text></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  inputArea: {
    backgroundColor: '#d2d2d2',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnsubmit: {
    backgroundColor:'#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textsubmit: {
    color: '#fff',
    fontSize: 18,
  },
})