import React, { useEffect, useState } from "react";
import { getProfileByCurrentUser, getProfileByEmail } from "../../Services/ProfileUserService";
import { useParams } from "react-router-dom";


// Profile's Header
const ProfileHeader = (props) => {
  const [profileDetails, setDetails] = useState([]);

  useEffect(() => {
      getProfileByEmail(props.email).then((details) => {
        setDetails(details);
        console.log("Details console log: " + profileDetails[0].attributes.Picture);
      });
  }, [props.email]);


  return (
    <div>
      {profileDetails.length > 0 && (
        <div>
          <h2>{profileDetails[0].attributes.FirstName} {profileDetails[0].attributes.LastName}
          {props.curUser && (
                    <button>Edit</button>
                  )}</h2>
          Email: {profileDetails[0].attributes.Email}
          {props.curUser && (
                    <button>Edit</button>
                  )} <br></br>
          Preferred Payment Type: {profileDetails[0].attributes.Payment}
          {props.curUser && (
                    <button>Edit</button>
                  )} <br></br>
          <img src="BlankProfilePhoto.png" height="300px" width="400px" alt="Photo Missing" />
        </div>
      )}
    </div>
  );
};

//<img src={profileDetails[0].attributes.Picture}></img>
export default ProfileHeader;