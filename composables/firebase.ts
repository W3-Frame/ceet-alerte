import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useRuntimeConfig } from "#app";

export function useFirebase() {
  const runtimeConfig = useRuntimeConfig();
  const app = initializeApp(runtimeConfig.public.firebase);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return { auth, app, db };
}