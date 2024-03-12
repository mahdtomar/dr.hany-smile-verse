import React, { useContext, useEffect, useState } from "react";
import defaultImage from "../../icons/Default_pfp.png";
import AuthContext from "../../context/AuthContext";
const UserImageAndName = ({ imageUrl, userName }) => {
  const current = useContext(AuthContext)
  const [imageSrc, setImageSrc] = useState(current.photoURL);
  useEffect(() => {
    const importImage = async () => {
      try {
        console.log(imageUrl);
        // const parsedImage = await require(imageUrl);
        // console.log(parsedImage);
        if(current.photoURL === ""){
          setImageSrc(defaultImage)
        }
      else{
        setImageSrc(imageUrl);
      }
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    importImage();
  }, [current.photoURL, imageUrl]);

  return (
    <div className="user-image">
      {imageSrc && (
        <>
          <img className="user-image" src={imageSrc} alt="Profile" />
          <p className="user-name">{userName}</p>
          
        </>
      )}
    </div>
  );
};

export default UserImageAndName;
