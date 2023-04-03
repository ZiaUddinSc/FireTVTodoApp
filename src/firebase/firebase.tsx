import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const currentUser =firebase.auth().currentUser

// Add Data to Todo Collection

export function addDataToDoFirbase (title="",checked=false) {
    if (currentUser !==null) {

        firestore()
        .collection('Todos')
        .add({
          title: title,
          checked: checked,
          uid:currentUser.uid
        })
        .then(todo => {
          console.log(JSON.stringify(todo));
        })
        .catch(error => {
        //   alert(error);
        });
    }
   
}


// Delete Data from Todo Collection


export function deleteDataToDoFirbase (title="") {
    if (currentUser !==null) {
        const coversations =firestore().collection('Todos').where('title', '==', title).where('uid', '==', currentUser.uid);
        coversations.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete();
        });
        });
    }
}

// Update checked and uncheked Data in Todo Collection


export function updateDataToDoFirbase (title="",checked=true) {
    if (currentUser !==null) {
        const coversations =firestore().collection('Todos').where('title', '==', title).where('uid', '==', currentUser.uid);
        coversations.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.update({
                checked: checked
              });
        });
        });
    }
}

// Delete all selection data from Todo Collection


export function deleteAllDataToDoFirbase (checked=true) {
    if (currentUser !==null) {
        const coversations =firestore().collection('Todos').where('checked', '==', checked).where('uid', '==', currentUser.uid);
        coversations.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete();
        });
        });
    }
}