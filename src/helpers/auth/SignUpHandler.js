import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const signUpHandler = async (form, auth, email, password, name) => {
  form.preventDefault();
  if (email === "" || password.length < 6 || name === "") {
    return;
  }

  const newUserCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
    name,
    
  );
  const newUser = newUserCredential.user;

  if (!newUser) {
    return;
  }

  const firestore = getFirestore();
  const userDocRef = doc(firestore, "user_profiles", newUser.uid);
  const userData = {
    email: newUser.email,
    name: name,
    uid: newUser.uid,
    goals: {
      Housing: 250.00,
      Food: 250.00,
      Transportation: 250.00,
      Entertainment: 250.00,
      Shopping: 250.00,
      Others: 250.00,
    },
    savingsGoal : 200.00,
  };

    await setDoc(userDocRef , userData);

  
  localStorage.setItem("name", name);
  localStorage.setItem("uid", newUser.uid);
  localStorage.setItem("isAuthenticated", "true");
  localStorage.setItem("email", newUser.email);
};
