import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
let copyList = [];

const getCopy = (params, actionType) => {
  return dispatch =>
    get(ref(database, "copy"))
      .then(snapshot => {
        snapshot.forEach(function(childSnapshot) {
          const valor = childSnapshot.val();
          valor.id = childSnapshot.key;
          copyList.push(valor);
        });
        if (actionType != null) {
          dispatch({
            type: actionType,
            params: params,
            data: copyList
          });
        }
        return copyList;
      })
      .catch(err => {
        console.log("pics in db didnt download correctly");
        throw err;
      });
};

const getCopyForTesting = () => {
  return new Promise((resolve, reject) => {
    get(ref(database, "copy"))
      .then(snapshot => {
        snapshot.forEach(function(childSnapshot) {
          const valor = childSnapshot.val();
          valor.id = childSnapshot.key;
          copyList.push(valor);
        });
        resolve(copyList);
      })
      .catch(err => {
        console.log("pics in db didnt download correctly");
        reject(err);
      });
  });
};

export default {
  getCopy,
  getCopyForTesting
};
