import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class WelcomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            pwd:''
        }
    }

    login=()=>{

    }

    signUp=(email,pwd)=>{
      console.log(email+";;;;"+pwd);
     /* firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.pwd)
      .then(()=>{
        return Alert.alert("User successfully added!");
      })
      .catch(function(error){
          return Alert.alert(error.message);
      });
      */
        
    }


        render(){
            return (
                <View style={styles.container}>
                    <View style={{margin:20}}>
                  <Text style={[styles.testStyle,{fontSize:40}]}>Book Santa</Text>      
                    </View>
                  <View>
                      <TextInput
                      placeholder="abc@example.com"
                      keyboardType="email-address"
                      style={styles.textBox}
                      onChange={(text)=>{
                        this.setState({email:text});
                      }}
                      >                       
                      </TextInput>


                      <TextInput
                      placeholder="Enter your password"
                      secureTextEntry={true}
                      style={styles.textBox}
                      onChange={(text)=>{
                            this.setState({
                                pwd:text
                            });
                      }}
                      >                       
                      </TextInput>
                  </View>      

                  <View>
                      <TouchableOpacity style={styles.buttonStyle}
                      onPress={()=>{
                          this.login();
                      }}>
                        <Text style={styles.testStyle}>Login</Text>
                      </TouchableOpacity>

                      <TouchableOpacity  style={styles.buttonStyle}
                      onPress={()=>{
                        this.signUp(this.state.email,this.state.pwd);
                    }}>
                         <Text style={styles.testStyle}>Sign Up</Text>
                      </TouchableOpacity>
                  </View>   
                </View>
              );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testStyle:{
      color:'pink',
      fontSize:14
  },
  textBox:{
      backgroundColor:'lightblue',
      margin:10,
      padding:10
  },
  buttonStyle:{
      backgroundColor:'#000000',
      alignItems:"center",
      margin:10,
      width:100,
      padding:10
    }
});
