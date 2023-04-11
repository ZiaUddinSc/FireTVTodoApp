import React, {useState, forwardRef} from 'react';
import {TouchableOpacity} from 'react-native';
interface Props {
  title: string;
  onPress: () => void;
  onBlur: () => void;
  onFocus: () => void;
  style?: any;
  activeOpacity?: any;
  styleFocused?: any;
}

const FocusableOpacity = forwardRef((props: Props, ref) => {
  const [focused, setFocused] = useState(false);

  return (
    <TouchableOpacity
      {...props}
      ref={ref}
      onPress={props.onPress}
      onFocus={event => {
        setFocused(true);
        if (props.onFocus) {
          props.onFocus();
        }
      }}
      onBlur={event => {
        setFocused(false);
        if (props.onBlur) {
          props.onBlur();
        }
      }}
      style={[
        props.style ? props.style : {},
        focused && {
          opacity: props.activeOpacity,
        },
        focused && props.styleFocused,
      ]}
    />
  );
});

export default FocusableOpacity;
