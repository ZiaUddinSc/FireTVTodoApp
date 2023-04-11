import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from './styles';
import FocusableOpacity from '../../components/FocusableOpacity';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import LoginHoc from '../../hoc/LoginHoc';
import Loader from '../../components/Loader';
import {SelectableContainer} from '../../components/Selectable/';

const LoginScreen = props => {
  const emailRef = useRef('');
  const passRef = useRef('');
  const loginref = useRef('');

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

  return (
    <ScrollView>
      {!props.loading ? (
        <View style={styles.container}>
          <SelectableContainer>
            <View style={{padding: 30}}>
              <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.forms}>
              <CustomInput
                placeholder="Email"
                label="Email"
                onChangeText={text => props.handleOnchange(text, 'email')}
                ref={emailRef}
                onFocus={onFocus}
                returnKeyType={'next'}
                onBlur={onBlur}
                error={props.errors.email}
              />

              <CustomInput
                placeholder="Password"
                secureTextEntry={props.secureTextEntry}
                onChangeText={text => props.handleOnchange(text, 'password')}
                onFocus={onPassFocus}
                onBlur={onPassBlur}
                ref={passRef}
                returnKeyType={'next'}
                error={props.errors.password}
                label="Password"
              />
            </View>

            <View style={{marginVertical: '10%'}}>
              <CustomButton
                onPress={props.validate}
                title={'LOGIN'}
                color={'#4c669f'}
                colorFocused={'#fff'}
                colorPressed={'f0f'}
              />

              <Text style={styles.footerText}>
                Don't have an account?{' '}
                <FocusableOpacity
                  nativeID={'component_touchable_opacity'}
                  onPress={() => props.onFooterLinkPress}
                  activeOpacity={{opacity: 0.7}}
                  ref={loginref}
                  styleFocused={{backgroundColor: 'red'}}>
                  <Text
                    onPress={props.onFooterLinkPress}
                    style={styles.footerLink}>
                    Sign up
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
export default LoginHoc(LoginScreen);
