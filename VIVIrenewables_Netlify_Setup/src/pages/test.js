import React, { useState, useEffect } from "react";

function Parent() {
  const [message, setMessage] = useState("parent component");

  const updateMessage = (newmsg) => {
    setMessage(newmsg);
  };
  return <Child text={message} onUpdate={updateMessage} />;
}

function Child({ text, onUpdate }) {
  return (
    <>
    <h1>  Hello world</h1>
      <p>{text}</p>
      
      <button onClick={() => onUpdate("updated by child.")}>Update</button>
    </>
  );
}
