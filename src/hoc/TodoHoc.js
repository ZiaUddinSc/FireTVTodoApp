import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  AddTodo,
  RemoveTodo,
  UpdateTodo,
  RemoveAllTodo,
} from '../redux/actions/todoActions';
import {firebase} from '@react-native-firebase/auth';
import {addDataToDoFirbase,deleteDataToDoFirbase,updateDataToDoFirbase,deleteAllDataToDoFirbase}  from '../firebase/firebase'

const TodoHoc = TodoList => {
  const NewTodoComponent = props => {
    const [todoValue, setTodoValue] = useState('');

    const addTodo = () => {
      if (todoValue.length < 1) {
        return;
      }
    
      const checkToDoValue = obj => obj.name === todoValue;
      if (props.todos && !props.todos.some(checkToDoValue)) {
        addDataToDoFirbase(todoValue,false)
        props.AddTodo(todoValue);
        setTodoValue('');
      } else {
        alert(`${todoValue} already added in Todo List`);
      }
    };

    const selectedTodo = (value, index,item) => {
      updateDataToDoFirbase(item.name,value)
      props.UpdateTodo({value: value, index: index});
    };

    const removeAllTodo = () => {
      deleteAllDataToDoFirbase()
      props.RemoveAllTodo('true');
    };

    const removeTodo = item => {
      const todoIndex = props.todos.indexOf(item);
      if (todoIndex > -1) {
        deleteDataToDoFirbase(item.name)
        props.RemoveTodo(item);
      } else {
        alert(`${todoValue} is not in the Todo List`);
      }
    };

    const syncData = () => {
        // Work in progress with Firebase
    }

    async function signOut() {
      await firebase
        .auth()
        .signOut()
        .then(user => {
          // Pop screen to Login
          props.navigation.navigate('LoginScreen');
        })
        .catch(error => {
          alert(error);
        });
    }

    // Pass the callable props to Original component
    return (
      <TodoList
        setTodoValue={setTodoValue}
        todoValue={todoValue}
        addTodo={addTodo}
        removeAllTodo={removeAllTodo}
        removeTodo={removeTodo}
        selectedTodo={selectedTodo}
        todos={props.todos}
        signOut={signOut}
        syncData={syncData}
      />
    );
  };
  //selecting the part of the data from the store that the connected component

  const mapStateToProps = state => ({
    todos: state.todos.todos,
  });

  // dispatching  actions

  const mapDispatchToProps = dispatch => {
    return {
      AddTodo: value => dispatch(AddTodo(value)),
      RemoveTodo: value => dispatch(RemoveTodo(value)),
      UpdateTodo: value => dispatch(UpdateTodo(value)),
      RemoveAllTodo: value => dispatch(RemoveAllTodo(value)),
    };
  };
  // Returns the new todo component

  return connect(mapStateToProps, mapDispatchToProps)(NewTodoComponent);
};

export default TodoHoc;