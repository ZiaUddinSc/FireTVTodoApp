import React, {useState, useRef} from 'react';
import {styles} from './TodoStyles';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from './CustomButton';
import {
  Text,
  View,
  useColorScheme,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TodoItemList from './TodoItemList';
import TodoHoc from '../hoc/TodoHoc';
import {SelectableContainer} from './Selectable/';

const TodoList = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const todoRef = useRef('');
  const labelStyle = {
    labelColor: isDarkMode ? Colors.lighter : Colors.darker,
  };
  const onFocus = () => {
    todoRef.current.focus();
  };

  const onBlur = () => {
    todoRef.current.blur();
  };
  return (
    <View style={styles.main}>
      <SelectableContainer>
        <View style={styles.sign_out}>
          <CustomButton
            title="Sign out"
            onPress={props.signOut}
            color={'#4c669f'}
            colorFocused={'#fff'}
            colorPressed={'f0f'}
          />
        </View>
        <TouchableHighlight onPress={onFocus} onBlur={onBlur}>
          <TextInput
            style={[
              styles.mainInput,
              {
                borderColor: labelStyle.labelColor,
                color: labelStyle.labelColor,
              },
            ]}
            ref={todoRef}
            onChangeText={props.setTodoValue}
            placeholder={'Add your todo here'}
            value={props.todoValue}
            returnKeyType={'next'}
          />
        </TouchableHighlight>
        <View style={styles.row}>
          <CustomButton
            title="Add Todo"
            onPress={props.addTodo}
            color={'#4c669f'}
            colorFocused={'#fff'}
            colorPressed={'f0f'}
          />
          <CustomButton
            title="Remove All"
            onPress={props.removeAllTodo}
            color={'#4c669f'}
            colorFocused={'#fff'}
            colorPressed={'f0f'}
          />
        </View>
        <Text style={[styles.list, {color: labelStyle.labelColor}]}>
          List of Todos :
        </Text>
        <TodoItemList
          todos={props.todos}
          selectedTodo={props.selectedTodo}
          removeTodo={props.removeTodo}
        />
      </SelectableContainer>
    </View>
  );
};
export default TodoHoc(TodoList);
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
