import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginVertical: 110,
  },
  forms: {
    flexDirection: 'column',
    flex: 1,
  },
  textinput: {
    fontSize: 20,
    fontWeight: '300',
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    color: '#000',
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
    textAlign: 'center',
    marginTop: 10,
  },
  footerLink: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 50,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    fontWeight: '200',
    color: '#009688',
  },
});
