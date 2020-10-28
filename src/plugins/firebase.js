import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyA8U0nQj4HsG2qBgr15Zb3Viy6AxZZHOns',
    authDomain: 'przepisy-s439437.firebaseapp.com',
    databaseURL: 'https://przepisy-s439437.firebaseio.com',
    projectId: 'przepisy-s439437',
    storageBucket: 'przepisy-s439437.appspot.com',
    messagingSenderId: '412654338696',
    appId: '1:412654338696:web:4c89b3349559216ec6d53d',
    measurementId: 'G-Y1EDXVV15L',
  }

  firebase.initializeApp(config)
}

const db = firebase.firestore()
export { db }
