import React, {useState} from 'react';
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
import  {SelectableContainer} from '../../components/Selectable/'

const RegistrationScreen = props => {
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
              onFocus={() => props.handleError(null, 'fullname')}
              error={props.errors.fullname}
            />
            <CustomInput
              placeholder="Email"
              label="Email"
              onChangeText={text => props.handleOnchange(text, 'email')}
              onFocus={() => props.handleError(null, 'email')}
              error={props.errors.email}
            />

            <CustomInput
              placeholder="Password"
              secureTextEntry={props.secureText}
              onChangeText={text => props.handleOnchange(text, 'password')}
              onFocus={() => props.handleError(null, 'password')}
              error={props.errors.password}
              label="Password"
            />
            <CustomInput
              placeholder="Phone Number"
              onChangeText={text => props.handleOnchange(text, 'phoneNumber')}
              onFocus={() => props.handleError(null, 'phoneNumber')}
              error={props.errors.phoneNumber}
              label="Phone Number"
            />

            <View style={{marginTop: '10%'}}>
              <CustomButton title="Sign up" onPress={() => props.validate()} />
            </View>

            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <Text onPress={props.onFooterLinkPress} style={styles.footerLink}>
                Sign in
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

export default RegistrationHoc(RegistrationScreen);
