/* @flow */

import React, { Component } from 'react';
import { TextInput } from 'react-native';

import selectable from './selectable';

const Selectable = selectable(TextInput);

export default class SelectableInput extends Component {
  _input: any

  _handleInputPress = () => {
    this._input.focus();
  }



  handleSubmit = () => {
    this._input.blur();
  }

  render() {
    return (
      <Selectable
        onPress={this.handleSubmit}
        onSubmitEditing={this._handleInputPress}
        ref={i => (this._input = i ? i._wrappedComponent : null)}
        {...this.props}
        autoFocus={this.props.autoFocus ? this.props.autoFocus : false}
        returnKeyType={'next'}
      />
    );
  }
}