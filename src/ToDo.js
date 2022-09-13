import React, { useState } from "react";

export default function ToDo(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToDo(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          name="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add to do"
        >
          {}
        </input>
        <button type="submit">Add To Do</button>
        {/* onclick de olur handslesubmit ya da adToDo buna eklenir ama props ile transfer ederek yaptik*/}
      </form>
    </div>
  );
}
