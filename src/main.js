import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.less'

import firebase from "firebase/app";
import  'firebase/auth'
import 'firebase/database'

createApp(App).mount('#app')

firebase.initializeApp({
        apiKey: "AIzaSyBivyW8-D2htT-a5B5K93DNAqmTV2ezp3M",
        authDomain: "studiomassage-81630.firebaseapp.com",
        projectId: "studiomassage-81630",
        storageBucket: "studiomassage-81630.appspot.com",
        messagingSenderId: "371448036407",
        appId: "1:371448036407:web:8a63c6e408350a247293b2",
        measurementId: "G-L3G7VXDB33"
})
