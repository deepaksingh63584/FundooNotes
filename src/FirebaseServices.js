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
    firebase.database().ref('/users/' + uid + '/Notes/').on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}

export function updatePinStatus(key, status) {
    console.log(key);
    console.log(status);
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        PinStatus: status
    })
}

export function editNotes(key, noteTitleValue, noteItemValue, pinStatus) {
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        Title: noteTitleValue,
        Content: noteItemValue,
        PinStatus: pinStatus
    })
}

export function deleteNotes(key) {
    console.log(key);
    console.log(status);
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').update
}