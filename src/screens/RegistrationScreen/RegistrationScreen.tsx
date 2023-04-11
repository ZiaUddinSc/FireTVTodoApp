import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
} from 'react-native';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import RegistrationHoc from '../../hoc/RegistrationHoc';
import Loader from '../../components/Loader';
import {SelectableContainer} from '../../components/Selectable/';
import FocusableOpacity from '../../components/FocusableOpacity';

const RegistrationScreen = props => {

  const emailRef = useRef('');
  const passRef = useRef('');
  const fullnamelRef = useRef('');
  const phonenoRef = useRef('');
  const regref = useRef('');

  const onFocus = () => {
    emailRef.current.focus();
  };

  const onBlur = () => {
    emailRef.current.blur();
  };
  const onPassFocus = () => {
    passRef.current.focus();
  };

  const onPassBlur = () => {
    passRef.current.blur();
  };

  const onFullnameFocus = () => {
    emailRef.current.focus();
  };

  const onFullnameBlur = () => {
    emailRef.current.blur();
  };
  const onPhoneFocus = () => {
    passRef.current.focus();
  };

  const onPhoneBlur = () => {
    passRef.current.blur();
  };

  return (
    <ScrollView>
      {!props.loading ? (
        <View style={styles.container}>
          <SelectableContainer>
            <View
              style={{
                padding: 10,
                marginLeft: 50,
              }}>
              <Text style={styles.title}>Register</Text>
            </View>

            <View style={styles.forms}>
              <CustomInput
                placeholder="Full Name"
                label="Full Name"
                onChangeText={text => props.handleOnchange(text, 'fullname')}
                onFocus={onFullnameFocus}
                onBlur={onFullnameBlur}
                ref={fullnamelRef}
                returnKeyType={'next'}
                error={props.errors.fullname}
              />
              <CustomInput
                placeholder="Email"
                label="Email"
                onChangeText={text => props.handleOnchange(text, 'email')}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={emailRef}
                returnKeyType={'next'}
                error={props.errors.email}
              />

              <CustomInput
                placeholder="Password"
                secureTextEntry={props.secureText}
                onChangeText={text => props.handleOnchange(text, 'password')}
                error={props.errors.password}
                label="Password"
                onFocus={onPassFocus}
                onBlur={onPassFocus}
                ref={passRef}
                returnKeyType={'next'}
              />
              <CustomInput
                placeholder="Phone Number"
                onChangeText={text => props.handleOnchange(text, 'phoneNumber')}
                error={props.errors.phoneNumber}
                label="Phone Number"
                onFocus={onPhoneFocus}
                onBlur={onPhoneBlur}
                ref={phonenoRef}
                returnKeyType={'next'}
              />

              <View style={{marginTop: '10%'}}>
                <CustomButton
                  title="Sign up"
                  onPress={() => props.validate()}
                  color={'#4c669f'}
                  colorFocused={'#fff'}
                  colorPressed={'f0f'}
                />
              </View>

              <Text style={styles.footerText}>
                Don't have an account?{' '}
                <FocusableOpacity
                  nativeID={'component_touchable_opacity'}
                  onPress={() => props.onFooterLinkPress}
                  activeOpacity={{opacity: 0.7}}
                  ref={regref}
                  styleFocused={{backgroundColor: 'red'}}>
                <Text
                  onPress={props.onFooterLinkPress}
                  style={styles.footerLink}>
                  Sign in
                </Text>
                </FocusableOpacity>
              </Text>
            </View>
          </SelectableContainer>
        </View>
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};

export default RegistrationHoc(RegistrationScreen);
