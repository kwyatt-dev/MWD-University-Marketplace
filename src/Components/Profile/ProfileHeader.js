import React, { useEffect, useState } from "react";
import { getProfileByCurrentUser, getProfileByEmail } from "../../Services/ProfileUserService";
import { useParams } from "react-router-dom";
import profilePhoto from "./BlankProfilePhoto.png";


// Profile's Header
const ProfileHeader = (props) => {
  const [profileDetails, setDetails] = useState([]);
  const [editFlag, setEditFlag] = useState(false);

  useEffect(() => {
      getProfileByEmail(props.email).then((details) => {
        setDetails(details);
      });
  }, [props.email]);


  return (
    <div>
      {profileDetails.length > 0 && (
        <div>
          <h2>
            {!editFlag && (
              <div>{profileDetails[0].attributes.FirstName} {profileDetails[0].attributes.LastName}</div>
              
            )}
            {props.curUser && !editFlag && (
              <button>Edit</button>
            )}
          </h2>
          Email: {profileDetails[0].attributes.Email}
          {props.curUser && (
                    <button>Edit</button>
                  )} <br></br>
          Preferred Payment Type: {profileDetails[0].attributes.Payment}
          {props.curUser && (
                    <button>Edit</button>
                  )} <br></br>
          <img src={profilePhoto} height="200px" width="200px" alt="Photo Missing" />
        </div>
      )}
    </div>
  );
};

//<img src={profileDetails[0].attributes.Picture}></img>
export default ProfileHeader;