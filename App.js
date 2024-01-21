import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (
  <h1 className="head" tabIndex="6">
    hello world using jsx
  </h1>
);

// React component

const HeadingComponent = () => {
    return (
        <h1 className="head" tabIndex="6">
          hello world using jsx
        </h1>
      );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
