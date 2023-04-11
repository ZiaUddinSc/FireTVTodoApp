/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';
const width = Dimensions.get('window').width;

interface Input {
  placeholder: string;
  onChangeText: () => void;
  value: any;
  returnKeyType: any;
  secureTextEntry: any;
  error: any;
  label: any;
  onFocus: () => void;
  onBlur: () => void;
  autoCapitalize: string;
  autoFocus: boolean;
}

const CustomInput: FC<Input> = React.forwardRef(
  (
    {
      placeholder,
      onChangeText,
      value,
      returnKeyType,
      secureTextEntry,
      error,
      label,
      autoCapitalize,
      onFocus,
      onBlur,
      autoFocus,
    },
    ref,
  ) => {
    const {content, input, number_btn, text} = styles;
    const [textInputFocused, setTextInputFocused] = useState(false);

    const onTextFocus = () => {
      setTextInputFocused(true);
    };
    const onTextBlur = () => {
      setTextInputFocused(false);
    };

    return (
      <KeyboardAvoidingView>
        <Text style={{color: '#000', marginLeft: 3}}>{label}</Text>
        <View
          style={[
            content,
            {
              marginBottom: error ? 5 : 10,
            },
            {borderColor: textInputFocused ? 'gray' : 'green'},
          ]}>
          <TouchableHighlight
            hasTVPreferredFocus
            tvParallaxProperties={{magnification: 1.2}}
            onPress={onFocus}
            onBlur={onBlur}>
            <TextInput
              placeholderTextColor={'gray'}
              placeholder={placeholder}
              style={[input]}
              ref={ref}
              onChangeText={onChangeText}
              value={value}
              autoFocus={autoFocus ? autoFocus : false}
              onFocus={onTextFocus}
              onBlur={onTextBlur}
              returnKeyType={returnKeyType ? returnKeyType : 'next'}
              secureTextEntry={secureTextEntry}
            />
          </TouchableHighlight>
        </View>

        {error && (
          <Text style={{marginBottom: 10, color: 'red', fontSize: 12}}>
            {error}
          </Text>
        )}
      </KeyboardAvoidingView>
    );
  },
);

export default CustomInput;
