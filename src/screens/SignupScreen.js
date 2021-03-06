import React, { useContext ,useEffect  } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation"; 
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "./components/AuthForm";
import NavLink from "./components/NavLink";
const SignupScreen = ({ navigation }) => {
  const { state, signup ,clearErrorMessage ,tryLocalSignin } = useContext(AuthContext);
  useEffect(()=>{
    tryLocalSignin();
  },[])
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="SignUp for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink 
        text="Already have an account? SingIn Instead"
        routeName="Signin"
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginRight: 15,
  }
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
