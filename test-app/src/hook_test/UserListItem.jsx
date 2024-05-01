// import { useState, useEffect } from "react";

import useUserStatus from "./useUserStatus"; // 사용자 정으 훅 import

function UserStatus(props) {
  const isOnline = useUserStatus(props.user.id);

  //const [isOnline, setIsOnline] = useState(null);
  // useEffect(() => {
  //   const handleStatusChange = (props) => {
  //     setIsOnline(status.isOnline);
  //   };

  //   ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange);
  //   return () => {
  //     ServerAPI.unsubscibeUserStatus(props.user.id, handleStatusChange);
  //   };
  // });
  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.user.name}</li>
  );
}

export default UserStatus;
