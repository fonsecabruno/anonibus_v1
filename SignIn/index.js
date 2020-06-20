import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import PasswordInputText from 'react-native-hide-show-password-input';
import { AuthContext } from '../context';

import { } from './styles';

import firebase from 'firebase';


export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch(error => alert(error))

  }

  return (
    <View style={styles.container}>
      <View style={styles.view_fields}>
        <TextInput
          placeholder={'Digite seu e-mail'}
          style={styles.input_auth}
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} />

        <PasswordInputText
          placeholder={'Digite sua senha'}
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Acessar" onPress={() => handleSignIn()} />
      <Button title="Criar Conta" onPress={() => navigation.push("CreateAccount")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  input_auth: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 3,
    padding: 4
  },
  view_fields: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  }
});

