import React, { useEffect, useState } from "react";
import { getProfileByCurrentUser, getProfileByEmail, updateCurrentProfile } from "../../Services/ProfileUserService";
import profilePhoto from "./BlankProfilePhoto.png";


// Profile's Header
const ProfileHeader = (props) => {
  const [profileDetails, setDetails] = useState([]);
  const [editNameFlag, setEditNameFlag] = useState(false);
  const [editPaymentFlag, setEditPaymentFlag] = useState(false);
  const [editDormFlag, setEditDormFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(() => {
      getProfileByEmail(props.email).then((details) => {
        setDetails(details);
      });
      console.log("USE EFFECT CALLED");
      setUpdateFlag(false);
  }, [props.email]);


  useEffect(() => {
    if (updateFlag) {
      var first = profileDetails[0].attributes.FirstName;
      if (document.getElementById("first-name-input")) {
        first = document.getElementById("first-name-input").value;

        if (first == "") {
          first = document.getElementById("first-name-input").placeholder;
        }
      }
      var last = profileDetails[0].attributes.LastName;
      if (document.getElementById("last-name-input")) {
        last = document.getElementById("last-name-input").value;

        if (last == "") {
          last = document.getElementById("last-name-input").placeholder;
        }
      }
      
      var payment= profileDetails[0].attributes.Payment;
      if ( document.getElementById("payment-input")){
        payment = document.getElementById("payment-input").value;
        if (payment == "") {
          payment = document.getElementById("payment-input").placeholder;
        }
      }
      
      var dorm = profileDetails[0].attributes.Dorm;
      if (document.getElementById("dorm-input")) {
        dorm = document.getElementById("dorm-input").value;

        if (dorm == "") {
          dorm = document.getElementById("dorm-input").placeholder;
        }
      }
      

      updateCurrentProfile(profileDetails[0].attributes.Email, first, last, dorm, payment).then(() => {
        getProfileByEmail(props.email).then((details) => {
          setDetails(details);
          setUpdateFlag(false);
          setEditNameFlag(false);
          setEditPaymentFlag(false);
          setEditDormFlag(false);
        });
      });

      
    console.log("USE EFFECT 2nd CALLED");
    }
    
    
  }, [updateFlag]);

  const updateUser = () => {
    setUpdateFlag(true);
  }


  return (
    <div>
      {profileDetails.length > 0 && (
        <div>
          <h2>
            {!editNameFlag && (
              <div>{profileDetails[0].attributes.FirstName} {profileDetails[0].attributes.LastName}</div>
              
            )}
            {props.curUser && !editNameFlag && (
              <div><button onClick={() => {setEditNameFlag(true)}}>Edit</button></div>
            )}
            {editNameFlag && (
              <div>
                <input type="text" placeholder={profileDetails[0].attributes.FirstName} id="first-name-input"></input>
                <input type="text" placeholder={profileDetails[0].attributes.LastName} id="last-name-input"></input>
              </div>
              
            )}
            {props.curUser && editNameFlag && (
              <div><button onClick={updateUser}>Submit</button></div>
            )}
          </h2>
          Email: {profileDetails[0].attributes.Email}
          <br></br>
          Preferred Payment Type:
          {!editPaymentFlag && (
              <div>{profileDetails[0].attributes.Payment}</div>
              
            )}
            {props.curUser && !editPaymentFlag && (
              <div><button onClick={() => {setEditPaymentFlag(true)}}>Edit</button></div>
            )}
            {editPaymentFlag && (
              <div>
                <input type="text" placeholder={profileDetails[0].attributes.Payment} id="payment-input"></input>
              </div>
              
            )}
            {props.curUser && editPaymentFlag && (
              <div><button onClick={updateUser}>Submit</button></div>
            )}
          <br></br>
          Dorm:
          {!editDormFlag && (
              <div>{profileDetails[0].attributes.Dorm}</div>
              
            )}
            {props.curUser && !editDormFlag && (
              <div><button onClick={() => {setEditDormFlag(true)}}>Edit</button></div>
            )}
            {editDormFlag && (
              <div>
                <input type="text" placeholder={profileDetails[0].attributes.Dorm} id="dorm-input"></input>
              </div>
              
            )}
            {props.curUser && editDormFlag && (
              <div><button onClick={updateUser}>Submit</button></div>
            )}
            <br></br>
          <img src={profilePhoto} height="200px" width="200px" alt="Photo Missing" />
        </div>
      )}
    </div>
  );
};

//<img src={profileDetails[0].attributes.Picture}></img>
export default ProfileHeader;