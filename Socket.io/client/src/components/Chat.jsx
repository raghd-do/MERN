import React, { useEffect } from "react";
import io from "socket.io-client";

const socket = io(":8000");

const Chat = (props) => {
  useEffect(() => {
    socket.on("Welcome", (data) => {
      console.log("welcome reseved: ", data);
    });

    return () => {
      socket.off("Welcome");
    };
  }, []);
};

export default Chat;
