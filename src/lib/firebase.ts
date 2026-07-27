/**
 * Firebase setup.
 *
 * 1. Go to https://console.firebase.google.com  ->  your project
 * 2. Project settings -> General -> "Your apps" -> Web app -> Config
 * 3. Paste the values below (these keys are safe to keep in code).
 * 4. In the console enable: Build -> Firestore Database (start in production mode).
 */
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "PASTE_API_KEY_HERE",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID",
};

export const isFirebaseConfigured = !firebaseConfig.apiKey.startsWith("PASTE_");

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function getDb(): Firestore {
  if (!isFirebaseConfigured) {
    throw new Error(
      "Firebase is not configured yet. Add your project keys in src/lib/firebase.ts",
    );
  }
  if (!app) app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  if (!db) db = getFirestore(app);
  return db;
}
