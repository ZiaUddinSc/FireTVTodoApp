import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddTodo,
  RemoveTodo,
  UpdateTodo,
  RemoveAllTodo,
} from '../redux/actions/todoActions';
import {styles} from './TodoStyles';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from './CustomButton';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TodoItemList from './TodoItemList';
import TodoHoc from '../hoc/TodoHoc';
import  {SelectableContainer,SelectableInput} from './Selectable/'

const TodoList = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const labelStyle = {
    labelColor: isDarkMode ? Colors.lighter : Colors.darker,
  };
  return (
    <View style={styles.main}>
      <SelectableContainer>
      <View style={styles.sign_out}>
        <CustomButton
          title="Sign out"
          onPress={props.signOut}
          color={['#4c669f', '#3b5998', '#192f6a']}
        />
      </View>
      <SelectableInput
        style={[
          styles.mainInput,
          {borderColor: labelStyle.labelColor, color: labelStyle.labelColor},
        ]}
        onChangeText={props.setTodoValue}
        placeholder={'Add your todo here'}
        value={props.todoValue}
      />
      <View style={styles.row}>
        <CustomButton
          title="Add Todo"
          onPress={props.addTodo}
        />
        <CustomButton
          title="Remove All"
          onPress={props.removeAllTodo}
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
