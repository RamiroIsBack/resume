import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database";

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

const newEntries = {
  "copy/timeLine/workMovement": {
    className: "work__movement",
    nombre: "Route Setter at Movement Gyms",
    description: "Competition and recreational route setting at Movement Climbing gyms in Baltimore and Washington D.C.\nCombined with IT consulting work at Alpha Biosciences.",
    fechaInicio: "2018",
    fechaFin: 2021,
    urlLink: "https://www.movementgyms.com/",
    urlPic: ""
  },
  "copy/timeLine/studiesClimbing": {
    className: "studies__climbing",
    nombre: "USA Climbing Route Setter Cert. Level 1",
    description: "USA Climbing Competition Route Setter Certification Level 1.",
    fechaInicio: 2020,
    fechaFin: 2020,
    urlLink: "https://usaclimbing.org/",
    urlPic: ""
  }
};

await update(ref(db), newEntries);
console.log("Firebase updated successfully.");
process.exit(0);
