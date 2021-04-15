import React from "react";
import Display from "./anime";

function Section() {
  return (
    <div className="section">
      <div className="wrap">
        <div className="post-head">
          <h2>My Recent Blog Posts</h2>
        </div>
        <div className="post">
          <div className="post-text">
            <h2>Three Reasons To Start A Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur culpa mollitia temporibus deserunt veniam non porro
              laudantium est? Quo vero non reprehenderit asperiores praesentium
              in dolore pariatur accusantium voluptate. Minus.
            </p>

            <p>
              <i>Published 20th April 2020, 3mins read</i>
            </p>
          </div>
          <div className="post-image">
            <img src="../img/1583621893095.jpg" alt="" />
          </div>
        </div>

        <div className="post">
          <div className="post-text">
            <h2>Three Reasons To Start A Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur culpa mollitia temporibus deserunt veniam non porro
              laudantium est? Quo vero non reprehenderit asperiores praesentium
              in dolore pariatur accusantium voluptate. Minus.
            </p>

            <p>
              <i>Published 20th April 2020, 3mins read</i>
            </p>
          </div>
          <div className="post-image">
            <img src="../img/1583621893095.jpg" alt="" />
          </div>
        </div>

        <div className="post">
          <div className="post-text">
            <h2>Three Reasons To Start A Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur culpa mollitia temporibus deserunt veniam non porro
              laudantium est? Quo vero non reprehenderit asperiores praesentium
              in dolore pariatur accusantium voluptate. Minus.
            </p>

            <p>
              <i>Published 20th April 2020, 3mins read</i>
            </p>
          </div>
          <div className="post-image">
            <img src="../img/1583621893095.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function animate() {
  Display("post", 300, 0);
  Display("post", 530, 1);
  Display("post", 750, 2);
}

window.addEventListener("scroll", animate);

export default Section;
