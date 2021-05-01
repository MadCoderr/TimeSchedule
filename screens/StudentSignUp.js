import { SafeAreaView, StyleSheet, View } from "react-native";
import  React, {useState} from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";


function StudentSignUp(props) {
    return (
        <SafeAreaView style={styles.container}>
          
           <AppTextInput 
            autoCapitalize='words'
            autoCorrect={false}
            icon='account'
            placeholder='Student Name'
           />

           <AppTextInput 
            autoCapitalize='words'
            autoCorrect={false}
            icon='account'
            placeholder='Father Name'

           />

           <AppTextInput 
            autoCapitalize='words'
            autoCorrect={false}
            icon='school'
            placeholder='Department'

           />
           
           <AppTextInput 
            autoCapitalize='words'
            autoCorrect={false}
            icon='numeric'
            placeholder='Registration No'

           />
           
           <AppTextInput 
            autoCapitalize='words'
            autoCorrect={false}
            icon='book'
            placeholder='Semester'

           />
    
            <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              placeholder='Email'
              textContentType='emailAddress'
           />
    
           <AppTextInput 
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            secureTextEntry
            placeholder='Password'
            textContentType='passwrod'
    
           />
    
            <AppTextInput 
              autoCapitalize='none'
              autoCorrect={false}
              icon='phone-classic'
              placeholder='Phone Number'
              textContentType='passwrod'
              keyboardType='numeric'
    
            />
    
           <AppButton title='SignUp' />

        </SafeAreaView>
      );
    
};

const styles = StyleSheet.create({
    container:{
      padding:10,
      paddingTop:30,
    },
  
  });

export default StudentSignUp;