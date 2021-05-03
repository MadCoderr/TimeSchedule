// libs
import React, { useState, useContext } from "react";
import { Image,Text, SafeAreaView, StyleSheet, View } from "react-native";

// components
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";
import colors from "../components/colors";


// firebae
import firebase from "../lib/firebase";

// context
import UserContext from "../context/UserAuth";

// collection
const UserCollection = firebase.firestore().collection("user");

function StudentLogIn(props) {

    const { signUp } = useContext(UserContext);

    const [formData, setFormData] = useState(null);
  
    const handleSubmit = () => {
      if (formData.email !== "" && formData.password !== "") {
        signUp(formData.email, formData.password)
          .then((userCredential) => {
            console.log("yaya sing up sccessfullly");
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        console.log("credentail empty");
      }
    };

    return (
        <SafeAreaView style={styles.container}>
            
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}>

            </Image>

            <Text style={styles.text}>ReSchedule Management System</Text>
                
  
  
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          value={formData?.email || ""}
        />
  
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
          placeholder="Password"
          textContentType="passwrod"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          value={formData?.password || ""}
        />
  
       
  
       
  
        <AppButton title="LogIn" color='blue' onPress={handleSubmit} />
       
        
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 15,
      marginRight:15,
      marginLeft:15,
    },

    logo:{
    
        width:140,
        height:140,
        alignSelf:'center'

    
      },
    
      text:{
        position:'relative',
        bottom:25,
        color: colors.black,
        fontSize: 15,
        fontWeight: "bold",
        marginVertical:20,
        textAlign:'center'
        
    }

  });
  
  export default StudentLogIn;
  