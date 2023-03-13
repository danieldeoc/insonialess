import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "./config";

export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("loged in", user.uid)
      const uid = user.uid;
      console.log("loged in as ", uid)
      return user;
      // ...
    } else {
      // User is signed out
      // ...
      console.log("not loged");
      return undefined
    }
});

///////////////////////////
// get current user data
export function  getUserData() {
        const user = auth.currentUser;
        if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
            return displayName;
        }

}


//////////////////////////////////////
// User Registration
export async function createUser<Promisse>(name:string, email:string, password:string) {

    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
                // sets user name
                updateProfile(user, {
                    displayName: name
                })
            sessionStorageControl(user.uid, name, user.email)
            window.location.href = "/";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorMessage
        });

        
}

////////////////////////////////
// Sign-in with user email and passwor
export async function signIn(email:string, password:string) {
    
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorageControl(user.uid, user.displayName, user.email)
        window.location.href = "/";
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

}

////////////
// manage session storage creation
function sessionStorageControl(id:string, name:string | null, email:string | null):void{
    sessionStorage.setItem('Auth User', id);
    if(name){
        sessionStorage.setItem('User Name', name);
    }
    if(email){
        sessionStorage.setItem('User E-mail', email);
    }
}

////////////////////////////////
// Sign-out user
export async function logOut() {
   await signOut(auth).then(() => {
        console.log("loged out")
        sessionStorage.removeItem('Auth User')
        sessionStorage.removeItem('User Name')
        sessionStorage.removeItem('User E-mail')
        window.location.href = "/";
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    })
}