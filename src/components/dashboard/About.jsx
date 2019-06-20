import React from 'react';

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>About Me</h2>
          </div>
          <div className=''>
            <div className='col-1-of-2'>
              <p className='paragraph'>
                My name is Jacob, I am a web developer who is works with React,
                Node.js, ExpressJS, and MongoDB. I am also able to work with
                .NET Core and relational databases like MSSQL. I am a US Navy
                Veteran who joined the medical field after the service, but I
                found my true passion of coding when it was recommended to me by
                a friend of mine. I've been hooked ever since, learning and
                building as much as I can!
              </p>
              <p className='paragraph'>Testing paragraph 2</p>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Technologies I've worked with:
              </h3>
              <p className='paragraph'>
                React.js, jQuery, Node.js, Express, .Net Core, T-SQL, MongoDB
              </p>
            </div>
            <div className='col-1-of-2'>
              <div className='composition' />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
