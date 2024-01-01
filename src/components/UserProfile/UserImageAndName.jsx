import React, { useEffect, useState } from "react";

const UserImageAndName = ({ imageUrl }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const { default: image } = await import(imageUrl);
        setImageSrc(image);
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    importImage();
  }, [imageUrl]);

  return <div>{imageSrc && <img src={imageSrc} alt="Profile" />}</div>;
};

export default UserImageAndName;
