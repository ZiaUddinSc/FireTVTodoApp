import {ADD_TODO, REMOVE_TODO,REMOVE_ALL,UPDATE_TODO} from '../actions/Actiontypes';
const INITIAL_STATE = {todos: []};
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos, {checked:false,name:action.payload}]};
    case REMOVE_TODO:
      return {todos: handleRemoveTodo(action.payload, state.todos)};
    case UPDATE_TODO:
      let todoState = [ ...state.todos ];
      todoState[action.payload.index].checked = action.payload.value
      return {todos: todoState};
    case REMOVE_ALL:
      let newTodo = state.todos.filter(item => item.checked !== true)
      return {todos:newTodo};
    default:
      return state;
  }
};
const handleRemoveTodo = (item, todos) => {
  // Remove Object from List  
  let newItems = todos.filter(
    (todo) => item.name !== todo.name,
  );
  return newItems;
};
export default todoReducer;
