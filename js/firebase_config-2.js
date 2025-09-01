const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVRveSEg9-fVsS3VQQBHthCP1c-ydw9uE",
  authDomain: "handmade-by-artisans.firebaseapp.com",
  projectId: "handmade-by-artisans",
  storageBucket: "handmade-by-artisans.firebasestorage.app",
  messagingSenderId: "798487452196",
  appId: "1:798487452196:web:9fbee6d575dacf4ec616b1",
  measurementId: "G-9DB9FF56QT",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "/checkout_1.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
};

ui.start("#firebaseui-auth-container-2", uiConfig);
