import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    // flexDirection: "row",
    justifyContent: 'center',
    marginBottom: 10,
    height: 50,
    borderWidth: 1,
    borderColor:'#009688',
    elevation: 1,
    backgroundColor:'#FFF',
    // borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  input: {
    height: 51,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    paddingRight: 5,
    paddingLeft: 5,
  },
  number_btn: {
    height: 51,
    width: 60,
    backgroundColor: 'sky',
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
});
