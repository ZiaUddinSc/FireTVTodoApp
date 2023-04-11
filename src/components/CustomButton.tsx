import React, {useState, forwardRef} from 'react';
import {Button} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  onBlur: () => void;
  onFocus: () => void;
  color?: any;
  colorFocused?: any;
  colorPressed?: any;
}

const CustomButton = forwardRef((props: Props, ref) => {
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  let color: any = props.color;
  if (focused && props.colorFocused) {
    color = props.colorFocused;
  } else if (pressed && props.colorPressed) {
    color = props.colorPressed;
  }
  return (
    <Button
      {...props}
      ref={ref}
      onPress={props.onPress}
      onFocus={event => {
        alert('focus:');
        setFocused(true);
        if (props.onFocus) {
          props.onFocus(event);
        }
      }}
      onBlur={event => {
        alert('blur:');
        setFocused(false);
        if (props.onBlur) {
          props.onBlur(event);
        }
      }}
      color={color}
    />
  );
});

export default CustomButton;
