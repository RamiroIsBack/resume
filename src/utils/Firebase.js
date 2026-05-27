import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function fetchCopyList() {
  return get(ref(database, "copy")).then(snapshot => {
    const list = [];
    snapshot.forEach(childSnapshot => {
      const valor = childSnapshot.val();
      valor.id = childSnapshot.key;
      list.push(valor);
    });
    return list;
  });
}

export const getCopyForTesting = fetchCopyList;

export default { getCopyForTesting };
