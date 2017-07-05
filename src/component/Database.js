// Database
import * as firebase from 'firebase';
export default class Database{
  static init(){
    firebase.initializeApp({
      apiKey: "AIzaSyCSxt8fxCKsXqzp-qLr0gdZSPrnFgSamWs",
      authDomain: "xtern-bootcamp.firebaseapp.com",
      databaseURL: "https://xtern-bootcamp.firebaseio.com",
      projectId: "xtern-bootcamp",
      storageBucket: "xtern-bootcamp.appspot.com",
      messagingSenderId: "117184114251"
      });
  }
}
