import React from 'react';
import * as backgroundImage from '../../imgs/header.jpg'
import * as avatarImage from '../../imgs/avatar.jpg'

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className='headerImage'>
              <img src={backgroundImage} alt='headerImg' />
          </div>
          <div className='avatarImage'>
              <img src={avatarImage} alt='avatarImg' />
          </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Main;
