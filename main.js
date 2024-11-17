import headerContainer from "./containers/headerContainer.js";
import landingContainer from "./containers/landingContainer.js";
import loginContainer from "./containers/loginContainer.js";
import Alpine from "./node_modules/alpinejs/dist/module.esm.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


createUserWithEmailAndPassword(auth, "jessica", "antoine")
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user", user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


window.Alpine = Alpine;

Alpine.directive("uppercase", el => {
    
    el.textContent = el.textContent.toUpperCase()
    el.style.fontSize = "20px";
})
Alpine.directive("yanis", el => el.style.color = "rgb(6, 110, 236)")

//Layout
Alpine.data("header", headerContainer);
//Context Page
Alpine.data("login", loginContainer);

Alpine.data("landing", landingContainer);

Alpine.start();

export { app }