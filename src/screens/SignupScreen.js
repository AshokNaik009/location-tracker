import React ,{ useState ,useContext } from 'react';
import { View, StyleSheet, } from 'react-native';
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
    <Spacer>
      <Button title="SignUp"  onPress={() => signup({ email, password })} />
    </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
  }
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


export default SignupScreen;
