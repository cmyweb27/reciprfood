import React from "react";
import "./practice.css";

const Practice = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="left-header">
          <h1>Living the simple life</h1>
          <p> A blog exploring minimalism in life</p>
        </div>

        <ul className="right-header">
          <li>Home</li>
          <li>About me</li>

          <li>Recent Posts</li>
        </ul>
      </div>

      <div className="articles">
        <div className="article">
          <h2> Finding simplicity in life </h2>
          <p>
            Life can get complicated really quickly, but it doesn't have to be!
            There are many ways to simplify your life, a few of which we've
            explored in the past. This week we're taking a bit of a approach
            though, in how you can find simplicity in the life you already
            living.
          </p>
          <p>continue reading</p>
        </div>
        <div className="article">
          <h2>Keeping cooking simple</h2>

          <p>
            Food is a very important part of everyone's life. If you want to be
            healthy, you have to eat healthy. One of the easiest ways to do that
            is to keep your cooking nice and simple.
          </p>
          <p>continue reading</p>
        </div>
        <div className="article">
          <h2>Simplicity and work</h2>
          <p>
            Work is often a major source of stress. People get frustrated, it
            ruins their relationship with others and it leads to burnout. By
            keeping your work life as simple as possible, it will help balance
            everything out.
          </p>
          <p>continue reading</p>
        </div>
        <div className="article">
          <h2>Simple decorations</h2>
          <p>
            A home isn't a home until you've decorated a little. People either
            don't decorate, or they go overboard and it doesn't have the impact
            they were hoping for. Staying simple will help draw the eye where
            you want it to and make things pop like never before.
          </p>
          <p>continue reading</p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
