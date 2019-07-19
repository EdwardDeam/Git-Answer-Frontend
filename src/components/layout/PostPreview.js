import React from "react";
import "./PostPreview.css";

export default function PostPreview(props) {
  return (
    <div className="post-card">
      <h3>{props.data.title}</h3>
      <h4>
        {props.data.author} • {props.data.date}
      </h4>
      <p>
        {props.data.text.slice(0, 400)}...{" "}
        <a href={`/${props.data._id}`}>Keep Reading</a>
      </p>
    </div>
  );
}
