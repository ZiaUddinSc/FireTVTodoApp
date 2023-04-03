import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Keyboard, Alert} from 'react-native';

const RegistrationHoc = RegComponent => {
  const NewRegComponent = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
      fullname: '',
      email: '',
      password: '',
      phoneNumber: '',
    });
    const [errors, setErrors] = React.useState({});
    const [secureText, setSecureText] = useState(true);
    const [loading, setLoading] = useState(false);

    const onFooterLinkPress = () => {
      navigation.navigate('LoginScreen');
    };

    // -------------------- ACTION -------------------- //

    const handleOnchange = (text, input) => {
      setInputs(prevState => ({...prevState, [input]: text}));
    };
    const handleError = (error, input) => {
      setErrors(prevState => ({...prevState, [input]: error}));
    };

    const validate = async () => {
      Keyboard.dismiss();
      let isValid = true;
      if (!inputs.fullname) {
        handleError('Please input full name', 'fullname');
        isValid = false;
      }
      if (!inputs.email) {
        handleError('Please input email', 'email');
        isValid = false;
      }
      if (!inputs.password) {
        handleError('Please input password', 'password');
        isValid = false;
      }
      if (!inputs.password) {
        handleError('Please input phone number', 'phoneNumber');
        isValid = false;
      }
      if (isValid) {
        RegisterUser();
      }
    };

    async function RegisterUser() {
      setLoading(true);
      await firebase
        .auth()
        .createUserWithEmailAndPassword(inputs.email.trim(), inputs.password);
      firestore()
        .collection('Users')
        .add({
          name: inputs.fullname,
          email: inputs.email,
          phonenumber: inputs.phoneNumber,
        })
        .then(() => {
          Alert.alert('Success', 'You are Registered Successfully');
          navigation.navigate('TodoList');
          setLoading(false);
          setInputs({fullname: '', email: '', password: '', phoneNumber: ''});
        })
        .catch(error => {
          setLoading(false);
          alert(error)
        });
    }
    // Pass the callable props to Original component

    return (
      <RegComponent
        inputs={inputs}
        errors={errors}
        secureText={secureText}
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
  return NewRegComponent;
};

export default RegistrationHoc;
