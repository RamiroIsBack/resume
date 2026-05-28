import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDF1G-uxr_Sg4jHLZAgyuVXsuHnTt8bhzU",
  authDomain: "resume-40a8a.firebaseapp.com",
  databaseURL: "https://resume-40a8a.firebaseio.com",
  projectId: "resume-40a8a",
  storageBucket: "resume-40a8a.appspot.com",
  messagingSenderId: "714638486475"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const snap = await get(ref(db, "copy"));
snap.forEach(child => {
  const val = child.val();
  if (val.nombre === "footer") {
    console.log("footer node:");
    console.log(JSON.stringify(val, null, 2));
  }
});

process.exit(0);
