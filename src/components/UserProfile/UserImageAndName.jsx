import React, { useEffect, useState } from "react";
import defaultImage from "../../icons/Default_pfp.png";
const UserImageAndName = ({ imageUrl, userName }) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);
  useEffect(() => {
    const importImage = async () => {
      try {
        console.log(imageUrl);
        // const parsedImage = await require(imageUrl);
        // console.log(parsedImage);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    importImage();
  }, [imageUrl]);

  return (
    <div>
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
