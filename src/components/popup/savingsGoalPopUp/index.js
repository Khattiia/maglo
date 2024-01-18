import React from "react";
import classes from './savingsPopup.module.css'
import CloseButton from '../../../assets/Img/SVG/CloseButton.svg'
import { useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const SavingsGoalPopup = ({onClose, savingsGoal, onGoalChange }) => {

  const [goal, setgoal] = useState(savingsGoal)


  const handleInputChange = (e) => {
    const value = e.target.value;
    setgoal(value)
  }

  const handleSave =  async () => {
    onGoalChange(goal)
    
    const uid = localStorage.getItem("uid");
    const firestore = getFirestore();
    const userDocRef = doc(firestore, "user_profiles", uid);

    try {
      await updateDoc(userDocRef, {
        savingsGoal : goal,
      });
 
      
      console.log("Goal updated in Firebase");
    } catch (error) {
      console.error("Error updating goal in Firebase:", error);
    }
    onClose();
    
  };


  return (
    <div>
      <div className={classes.popupBackdrop}>
        <div className={classes.popup}>
          <img
            src={CloseButton}
            onClick={onClose}
            className={classes.closeButton}
            alt="close"
          />
          <div className={classes.header}>
            <h2 className={classes.name}>Savings Goal</h2>
            <input
              placeholder={'Write Your New Savings Goal'}
              onChange={handleInputChange}
              className={classes.input}
            />
          </div>
          <button onClick={handleSave} className={classes.button}>
            Save
          </button>
        </div>
      </div>
    </div>
  );


}


export default SavingsGoalPopup