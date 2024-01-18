import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const SignInHandler = async (form, email, password, auth) => {
  form.preventDefault();
  if (email === "" || password.length < 6) {
    return;
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    if (user) {
      const firestore = getFirestore();
      const userDocRef = doc(firestore, "user_profiles", user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      const userData = userDocSnapshot.data();
      const name = userData.name;
      const imageUrl = userData.image;

      localStorage.setItem("uid", user.uid);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("email", user.email);
      localStorage.setItem("name", name);
      localStorage.setItem("userImage", imageUrl);
    }
  } catch (error) {
    console.error("Sign-in error:", error);
  }
};
