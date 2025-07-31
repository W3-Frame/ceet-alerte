import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { useRuntimeConfig } from "#app";

class FirebaseSingleton {
  private static instance: FirebaseSingleton | null = null;
  private app: FirebaseApp | null = null;
  private auth: any | null = null;
  private db: any | null = null;

  private constructor() {
    // const runtimeConfig = useRuntimeConfig();
    // this.app = initializeApp(runtimeConfig.public.firebase);
    // this.auth = getAuth(this.app);
    // this.db = getFirestore(this.app);
  }

  public static getInstance(): FirebaseSingleton {
    if (!FirebaseSingleton.instance) {
      FirebaseSingleton.instance = new FirebaseSingleton();
    }
    return FirebaseSingleton.instance;
  }

  public getAuth(): any {
    return this.auth;
  }

  public getApp(): FirebaseApp | null {
    return this.app;
  }

  public getDb(): any {
    return this.db;
  }

  public getFirebase(): any {
    return { auth: this.auth, app: this.app, db: this.db };
  }
}

export const firebaseInstance = FirebaseSingleton.getInstance();
