// firebae
import firebase from "../lib/firebase";

export const UserCollection = firebase.firestore().collection("user");
export const requestCollection = firebase.firestore().collection("request");
export const teacherCollection = firebase.firestore().collection("teacher");
