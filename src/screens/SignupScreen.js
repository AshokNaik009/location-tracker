import React ,{ useState ,useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text,Input, Button  } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from './components/Spacer';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={styles.container}> 
    <Spacer>
      <Text h3> Sign Up for Tracker </Text>
    </Spacer>
    <Spacer>
      <Input label="Email" autoCapitalize="none" autoCorrect={false} value={email} onChangeText={setEmail} />
    </Spacer>
    <Spacer>
      <Input secureTextEntry label="Password" autoCapitalize="none" autoCorrect={false} value={password} onChangeText={setPassword} />
    </Spacer>
    { state.errorMessage ? <Text style={styles.errorMessage}>  {state.errorMessage} </Text> :null }
    <Spacer>
      <Button title="SignUp"  onPress={() => signup({ email, password })} />
    </Spacer>
    <TouchableOpacity onPress={()=> { navigation.navigate('Signin') }}>
      <Spacer>
        <Text style={styles.link}> Already have an account ? Singin instead </Text>
      </Spacer>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
  },
  errorMessage:{
    fontSize:16,
    color:'red',
    marginLeft:15,
    marginRight:15
  },
  link :{
    color:'blue'
  }
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


export default SignupScreen;
