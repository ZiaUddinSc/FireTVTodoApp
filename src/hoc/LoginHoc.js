import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Keyboard} from 'react-native';

const LoginHoc = LoginComponent => {
  const NewLoginComponent = ({navigation}) => {
    const [inputs, setInputs] = React.useState({email: '', password: ''});
    const [errors, setErrors] = React.useState({});
    const [secureText, setSecureText] = useState(true);
    const [loading, setLoading] = useState(false);

    const onFooterLinkPress = () => {
      navigation.navigate('Registration');
    };

    // -------------------- ACTION -------------------- //

    const handleOnchange = (text, input) => {
      const value = text;
      setInputs(prevState => ({...prevState, [input]: value}));
    };
    const handleError = (error, input) => {
      setErrors(prevState => ({...prevState, [input]: error}));
    };

    const validate = async () => {
      Keyboard.dismiss();
      let isValid = true;
      if (!inputs.email) {
        handleError('Please input email', 'email');
        isValid = false;
      }
      if (!inputs.password) {
        handleError('Please input password', 'password');
        isValid = false;
      }
      if (isValid) {
        LoginUser();
      }
    };

    async function LoginUser(input) {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(inputs.email.trim(), inputs.password)
        .then(user => {
          navigation.navigate('TodoList');
          setLoading(false);
          setInputs({email: '', password: ''});
        })
        .catch(error => {
          setLoading(false);
          alert(error);
        });
    }

    // Pass the callable props to Original component

    return (
      <LoginComponent
        inputs={inputs}
        errors={errors}
        secureTextEntry={secureText}
        setErrors={setErrors}
        setInputs={setInputs}
        handleError={handleError}
        handleOnchange={handleOnchange}
        validate={validate}
        onFooterLinkPress={onFooterLinkPress}
        loading={loading}
      />
    );
  };

  // Returns the new todo component
  return NewLoginComponent;
};

export default LoginHoc;
