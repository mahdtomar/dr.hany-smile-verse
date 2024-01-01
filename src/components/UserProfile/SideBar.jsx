import React, { useEffect, useState } from "react";
import UserImageAndName from "./UserImageAndName";
import { users } from "../../Data";
import { useParams } from "react-router-dom";

const SideBar = () => {
  const [user, setUser] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = users.find((user) => +user.id === +id);
        console.log(currentUser);
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!user) {
    return "no user";
  } else {
    return (
      <div>
        <UserImageAndName className="user-image" imageUrl={user.Image} />
      </div>
    );
  }
};

export default SideBar;
