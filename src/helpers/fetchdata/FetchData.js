import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const fetchUserData = async () => {
      const firestore = getFirestore();
      const userDocRef = doc(firestore, "user_profiles", uid);

      try {
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setUserData(userData);
        } else {
          await setDoc(userDocRef, { goals: {} }, { merge: true });
          setUserData({ goals: {} });
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      if (uid) {
        await fetchUserData();
      }
    };

    fetchData();
  }, [uid]);

  return userData;
};

export default useUserData;
