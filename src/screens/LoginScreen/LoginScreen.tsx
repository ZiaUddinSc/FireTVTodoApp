import React, {useState} from 'react';
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

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import LoginHoc from '../../hoc/LoginHoc';
import Loader from '../../components/Loader';
import  {SelectableContainer} from '../../components/Selectable/'

const LoginScreen = props => {
  return (
    <ScrollView>
      {!props.loading ? (
        <View style={styles.container}>
          <SelectableContainer>
          <View
            style={{
              padding: 30,
            }}>
            <Text style={styles.title}>Login</Text>
          </View>

          <View style={styles.forms}>
            <CustomInput
              placeholder="Email"
              label="Email"
              onChangeText={text => props.handleOnchange(text, 'email')}
              onFocus={() => props.handleError(null, 'email')}
              error={props.errors.email}
            />

            <CustomInput
              placeholder="Password"
              secureTextEntry={props.secureTextEntry}
              onChangeText={text => props.handleOnchange(text, 'password')}
              onFocus={() => props.handleError(null, 'password')}
              error={props.errors.password}
              label="Password"
            />
          </View>

          <View style={{marginVertical: '10%'}}>
            <CustomButton 
              title="LOGIN" 
              onPress={props.validate} 
              color={['#4c669f', '#3b5998', '#192f6a']}
              />

            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <Text onPress={props.onFooterLinkPress} style={styles.footerLink}>
                Sign up
              </Text>
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
