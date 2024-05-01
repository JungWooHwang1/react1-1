import { useState, useEffect } from "react";

function useUserStatus(userId) {
  useEffect(() => {
    const handleStatusChange = (props) => {
      setIsOnline(status.isOnline);
    };

    ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscibeUserStatus(props.user.id, handleStatusChange);
    };
  });
  return isOnline;
}
