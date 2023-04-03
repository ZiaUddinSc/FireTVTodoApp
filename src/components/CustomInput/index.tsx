/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native';
import { selectable, SelectableContainer, SelectableInput } from '../Selectable';

import styles from './styles';
const width = Dimensions.get('window').width;

interface Input {
  placeholder: string;
  onChangeText: () => void;
  value: any;
  keyboardType: any;
  secureTextEntry: any;
  error: any;
  label: any;
  onFocus: () => void;
  autoCapitalize:string
}

const CustomInput: FC<Input> = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  error,
  label,
  autoCapitalize,
  onFocus = () => {},
}) => {
  const {content, input, number_btn, text} = styles;
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <KeyboardAvoidingView >
      <Text style={{color: '#000', marginLeft: 3}}>{label}</Text>
      <View
        style={[
          content,
          {
            marginBottom: error ? 5 : 10,
          },
        ]}>
        <SelectableInput
          placeholderTextColor={'gray'}
          placeholder={placeholder}
          style={[input]}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize={ autoCapitalize ? autoCapitalize:'none'}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {error && (
        <Text style={{marginBottom: 10, color: 'red', fontSize: 12}}>
          {error}
        </Text>
      )}
    </KeyboardAvoidingView>
  );
};

export default CustomInput;
