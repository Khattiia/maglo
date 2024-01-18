import classes from "./settingsComponent.module.css";
import UploadPhoto from "../../assets/Img/SVG/UploadPhoto.svg";
import { Form } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [image, setImage] = useState();

  const navigate = useNavigate();

  const onImageChange = (e) => {
    const uploadedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(uploadedImage);
    setImage(imageUrl);
    localStorage.setItem("userImage", imageUrl);
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  useEffect(() => {
    setNewName("");
    setNewEmail("");
    setNewUserName("");
    setNewNumber("");
  }, [name]);

  const formHandler = async (event) => {
    event.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      return;
    }

    const firestore = getFirestore();
    const userDocRef = doc(firestore, "user_profiles", user.uid);

    try {
      if (newName === "" || newEmail === "" || newNumber === "") {
        return;
      }

      await updateDoc(userDocRef, {
        name: newName || name,
        email: newEmail || email,
        phoneNumber: newNumber,
        userName: newUserName,
      });
      localStorage.setItem("name", newName);
      localStorage.setItem("email", newEmail);
      localStorage.setItem("userName", newUserName);
      localStorage.setItem("phoneNumber", newNumber);
      navigate("/settings");
    } catch (error) {
      console.error("Error updating user profile", error.message);
    }
  };

  const convertBlobToDataUrl = async (blobUrl) => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", blobUrl);
      xhr.responseType = "blob";
      xhr.send();
    });
  };

  const uploadHandler = async () => {
    try {
      if (image) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          console.error("User not authenticated");
          return;
        }

        const firestore = getFirestore();
        const userDocRef = doc(firestore, "user_profiles", user.uid);

        const convertedImageUrl = await convertBlobToDataUrl(image);

        await updateDoc(userDocRef, {
          image: convertedImageUrl,
        });
      }
    } catch (error) {
      console.error("error updating image");
    }
  };

  return (
    <div className={classes.box}>
      <Form onSubmit={formHandler}>
        <div className={classes.leftSide}>
          <div className={classes.inputBox}>
            <div className={classes.inputs}>
              <div className={classes.description}>
                Full Name
                <input
                  type="text"
                  placeholder={name}
                  className={classes.input}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>
              <div className={classes.description}>
                Email
                <input
                  type="text"
                  placeholder={email}
                  className={classes.input}
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                />
              </div>
              <div className={classes.description}>
                UserName
                <input
                  type="text"
                  placeholder="userName"
                  className={classes.input}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className={classes.description}>
                Number
                <input
                  type="text"
                  placeholder="+995 --- --- ---"
                  className={classes.input}
                  name="phoneNumber"
                  required
                  onChange={(e) => setNewNumber(e.target.value)}
                />
              </div>
            </div>
            <button className={classes.button}>Update Profile</button>
          </div>
        </div>
      </Form>

      <div className={classes.rightSide}>
        <div>Your Profile Picture</div>
        <div className={classes.upload}>
          <img src={UploadPhoto} alt="uploadphoto" />
          <input
            type="file"
            id="fileInput"
            className={classes.photoInput}
            onChange={onImageChange}
          />
          <label htmlFor="fileInput" className={classes.photoLabel}>
            {" "}
            Click here
          </label>
        </div>
        <button onClick={uploadHandler}>upload</button>
      </div>
    </div>
  );
};

export default Account;
