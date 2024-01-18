import { signInWithPopup } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const signInWithGoogle = async (auth, provider) => {
  const res = await signInWithPopup(auth, provider);
  const user = res.user;
  const firestore = getFirestore();
  const userDocRef = doc(firestore, "user_profiles", user.uid);
  const userData = {
    email: user.email,
    uid: user.uid,
  };
  await setDoc(userDocRef, userData);
  localStorage.setItem("uid", user.uid);
  localStorage.setItem("isAuthenticated", "true");
  localStorage.setItem('email', user.email )
};
