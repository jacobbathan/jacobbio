import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header" />
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Jacob Bathan</span>
            <span className="heading-primary-sub">
              Full Stack Web Developer
            </span>
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
