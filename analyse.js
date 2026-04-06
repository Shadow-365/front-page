// console.log("Hello Mars")
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDcHHOtkU-ZlSqVrhYR6VuDNAaVqY8oWKI",
    authDomain: "front-page-e1691.firebaseapp.com",
    projectId: "front-page-e1691",
    storageBucket: "front-page-e1691.firebasestorage.app",
    messagingSenderId: "438434658832",
    appId: "1:438434658832:web:df72424de02ac7870d2895",
    measurementId: "G-LCV2X3BNTY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db= getFirestore(app);

  const btn = document.getElementById("dwn");
  const btn2 = document.getElementById("verc");

  btn.addEventListener("click", async()=>{
    try{
    await addDoc(collection(db, "Download pdf"),{
        user: "Downloaded!",
        time: new Date()   
    }); 
    } catch (error) {
        console.log("Error", error);
    };
  });

  btn2.addEventListener("click", async()=>{
    try{
      await addDoc(collection(db, "seeDev"),{
            Devlog: "Dev log Checked!",
            time: new Date() 
      });
     } catch (error){
        console.log("Error", error);
    };
  });





btn.addEventListener("click",()=>{
    logEvent(analytics, "PDF download");
});

btn2.addEventListener("click", ()=>{
    logEvent(analytics,"Dev-Log click");
});





