import { useState, useEffect } from "react";

function UserStatus(props) {
  const isOnline = useUserStatus(props.user.id); //사용자 정의 훅
  //  const [isOnline, setIsOnline] = useState(null);
  //   useEffect(() => {
  //     const handleStatusChange = (props) => {
  //       setIsOnline(status.isOnline);
  //     };

  //     ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange);
  //     return () => {
  //       ServerAPI.unsubscibeUserStatus(props.user.id, handleStatusChange);
  //     };
  //   });
  if (isOnline == null) {
    return "대기중...";
  }
  return isOnline ? "온라인" : "오프라인";
}

export default UserStatus;
