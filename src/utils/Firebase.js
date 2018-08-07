import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDF1G-uxr_Sg4jHLZAgyuVXsuHnTt8bhzU',
  authDomain: 'resume-40a8a.firebaseapp.com',
  databaseURL: 'https://resume-40a8a.firebaseio.com',
  projectId: 'resume-40a8a',
  storageBucket: 'resume-40a8a.appspot.com',
  messagingSenderId: '714638486475'
};
firebase.initializeApp(config);
const database = firebase.database();
let copyList = [];

const getCopy = (params, actionType) => {
  return dispatch => database.ref('copy').once('value')
    .then(snapshot => {
      snapshot.forEach(function (childSnapshot) {
        const valor = childSnapshot.val();
        valor.id = childSnapshot.key;
        copyList.push(valor);
      });
      if (actionType != null) {
        dispatch({
          type: actionType,
          params: params, // can be null
          data: copyList, // list with all d objects
        });
      }

      return copyList;
    })
    .catch(err => {
      console.log('pics in db didnt download correctly');
      throw err;
    });
};
const getCopyForTesting = () => {
  return new Promise((resolve, reject) => {
    database.ref('copy').once('value')
      .then(snapshot => {
        snapshot.forEach(function (childSnapshot) {
          const valor = childSnapshot.val();
          valor.id = childSnapshot.key;
          copyList.push(valor);
        });
        resolve(copyList);
      })

      .catch(err => {
        console.log('pics in db didnt download correctly');
        reject(err);
      });
  });
};

export default {
  getCopy: getCopy,
  getCopyForTesting: getCopyForTesting,
};
