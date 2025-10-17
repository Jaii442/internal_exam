import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
      })
      .then((res) => {
        console.log("Response:", res.data);
        alert("Post added successfully!");
        setTitle("");
        setBody("");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add post!");
      });
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;