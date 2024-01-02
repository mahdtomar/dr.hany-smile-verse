import React, { useEffect, useState } from "react";
import defaultImage from "../../icons/Default_pfp.png";
const UserImageAndName = ({ imageUrl }) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);

  useEffect(() => {
    const importImage = async () => {
      try {
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    importImage();
  }, [imageUrl]);

  return <div>{imageSrc && <img src={imageSrc} alt="Profile" />}</div>;
};

export default UserImageAndName;
