import {Text, TouchableOpacity,Button} from 'react-native';
import React from 'react';
import {styles} from './TodoStyles';
import LinearGradient from 'react-native-linear-gradient';
import { selectable } from './Selectable';
const SelectableButton = selectable(Button);

interface Props {
  title: string;
  onPress: () => void;
  color?: any;
}

const CustomButton = (props: Props) => {
  return (

    <SelectableButton
      style={{marginHorizontal: 3}}
      title={props.title}
      onPress={props.onPress}
      />
  );
};

export default CustomButton;