import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import AuthForm from "./components/AuthForm";
import NavLink from "./components/NavLink";
import {Context }from "../context/AuthContext";
import { NavigationEvents } from "react-navigation"; 

const SigninScreen = () => {
  const { state, signin , clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign in for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink text="Dont have an account? Signup instead" routeName="Signup" />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
