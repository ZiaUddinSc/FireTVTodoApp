import {StyleSheet, Dimensions,Platform} from 'react-native';
let width = Dimensions.get('window').width;
const TodoStyles = {
  main: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
  mainInput: {
    borderWidth: 0.5,
    height: 55,
    width: width * 0.9,
    // padding: 10,
    // margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#008000',
    backgroundColor: '#82C9B6',
    width: width * 0.75,
    height: 40,
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#f00',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  deleteIcon: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'cyan',
  },
  deleteContainer: {
     marginVertical: 0,
     borderRadius: 5,
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  removeTodo: {
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 1, 
  },
  list: {
    marginTop: 15,
    alignSelf: 'stretch', 
    paddingLeft: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  checkbox: {
    marginRight: 5, 
    marginLeft: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sign_out:{
    alignSelf: 'flex-end', 
    marginRight: 5, 
    marginTop: 5,
  }
};
export const styles = StyleSheet.create(TodoStyles);