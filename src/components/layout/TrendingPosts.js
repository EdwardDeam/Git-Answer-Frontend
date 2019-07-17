import React from "react";
import "./TrendingPosts.css";

export default function TrendingPosts(props) {
  return (
    <div class="trending-card">
      <h4>{props.data.title}</h4>
      <h5>
        {props.data.author} • {props.data.date}
      </h5>
      <p>
        {props.data.text.slice(0, 99)}... <a href="#">See More</a>
      </p>
    </div>
  );
}
