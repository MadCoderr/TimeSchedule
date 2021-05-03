import { StyleSheet, Button, Text, View, Image } from "react-native";
import * as React from "react";

// from components
import colors from "../components/colors";
import AppButton from "../components/Button";

const Login = ({ navigation }) => {
  return (

    <View style={styles.logoContainer}>

    <Image
     style={styles.logo}
     source={require('../assets/logo.png')}>

     </Image>

     <Text style={styles.text}>ReSchedule Management System</Text>

      <AppButton  title="Login as Student" color="green" ></AppButton>
      
      <AppButton  title="Login as Teacher" color="blue"></AppButton>

      <Text style={styles.text2}>Don't Have Account! Click Here to SignUp</Text>

    </View>
    
  );
}



const styles = StyleSheet.create({
  
  logoContainer:{
    alignItems:'center',
    marginRight:13,
    marginLeft:13

  
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
    
    
  },

  text2:{
    position:'relative',
    color:'#3387ff',
    fontSize: 13,
    fontWeight: "bold",
    marginTop:30
    

  },

  
})

export default Login;
