import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase Web SDK configuration.
// These values are intended for client-side Firebase initialization.
const firebaseConfig = {
  apiKey: 'AIzaSyDFq5t-T7hMbbjwxG-cqBXJNkct8m4DmQ',
  authDomain: 'anas-mahmud-portfolio.firebaseapp.com',
  projectId: 'anas-mahmud-portfolio',
  storageBucket: 'anas-mahmud-portfolio.firebasestorage.app',
  messagingSenderId: '532473488459',
  appId: '1:532473488459:web:a7ce848d8b88f33f6199ce',
  measurementId: 'G-0GE62BF8Z0',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
