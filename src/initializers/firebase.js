import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDO9MlVgQp7_ad_tWYi-oSfVr6EcP_wpS4",
    authDomain: "albumes-react.firebaseapp.com",
    databaseURL: "https://albumes-react.firebaseio.com",
    projectId: "albumes-react",
    storageBucket: "",
    messagingSenderId: "418207332705"
}

firebase.initializeApp(config)

export default firebase