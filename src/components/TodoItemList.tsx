import React, {useState} from 'react';
import {styles} from './TodoStyles';
import CheckBox from '@react-native-community/checkbox';
import {Text, View, FlatList, Button} from 'react-native';
import  {selectable} from './Selectable/'

const SelectableButton = selectable(Button);


function TodoItemList(props) {

  return (
    <FlatList
      data={props.todos}
      renderItem={({item, index}) => (
        <View style={styles.todoView}>
          <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={item.checked}
            boxType="circle"
            onValueChange={newValue => props.selectedTodo(newValue, index,item)}
          />
          <View style={styles.todoList}>
            <Text style={styles.text}>{item ? item.name : ''}</Text>
          </View>
          <View style={styles.deleteContainer}>
            
          <SelectableButton
            style={styles.removeTodo}
            title="X"
            onPress={() => props.removeTodo(item)}
            />
          </View>
        </View>
      )}
    />
  );
}

export default TodoItemList;
