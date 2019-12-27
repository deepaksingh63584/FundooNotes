import firebase from './firebase';
const uid = localStorage.getItem('uId')

export function setNoteInFireBase(noteTitleValue, noteItemValue, pinStatus) {
    console.log('uf : ' + uid);
    firebase.database().ref('/users/' + uid + '/Notes/').push({
        Title: noteTitleValue,
        Content: noteItemValue,
        PinStatus: pinStatus
    })
}

export function fetchNotesFromFireBase(callback) {
    firebase.database().ref('/users/' + uid + '/Notes/').once('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}