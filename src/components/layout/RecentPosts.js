import React, { Component } from "react";
import "./RecentPosts.css";

export default class RecentPosts extends Component {
  render() {
    return (
      <div className="latest-card">
        <div className="latest-card-content">
          <h3>Lorem ipsum dolor amet air plant street art trust fund</h3>
          <h4>PERSONS' NAME • 02 JULY 2019</h4>
          <p>
            Polo santo shabby chic keffiyeh poke pork belly whateer cardigan.
            Raw denim put a bird on it man broid hoodie kickstarter poutine
            gastropub leggings DIY. Shaman hexagon activated charcoal. YOLO
            kinfolk fashion axe poke. Ennui lo-fi post-ironic raclette.
            Chillwave kale chips cronut migas kickstarter butcher synth occupy
            dreamcatcher tumblr thundercats scenester.
          </p>
          <a href="#">Keep reading</a>
        </div>

        <div className="latest-icon">
          <img src="https://picsum.photos/200" />
        </div>
      </div>
    );
  }
}
