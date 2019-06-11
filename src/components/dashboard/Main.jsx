import React from 'react';
import * as backgroundImage from '../../imgs/header.jpg';
import * as avatarImage from '../../imgs/avatar.jpg';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className='header' />

        <div className='text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary-main'>Jacob Bathan</span>
            <span className='heading-primary-sub'>
              Web Developer & Professional Idiot
            </span>
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
