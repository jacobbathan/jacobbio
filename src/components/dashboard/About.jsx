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
              <h3 className='heading-tertiary u-margin-bottom-small' />
              <p className='paragraph'>
                Welcome to my website! My name is Kerry Staley and I am a
                passionate full stack developer from San Diego, CA. I received
                my Bachelor of Arts from the University of California, Santa
                Barbara majoring in Global Studies with an emphasis in Chinese
                Economics and Environmental Impact. However, my true passion and
                motivation lies within the tech industry. I found a passion for
                technology when I was young and taught myself how to code via
                online courses and my surrounding network. To further my
                programming experience and repertoire, I worked for an
                e-commerce start-up company called OutlayR, whose purpose is to
                connect social media influencers with online merchants. During
                my time with OutlayR, I worked on a team with 16 other
                engineers, practicing Agile / SCRUM methodology. The stack that
                our web-application was built in consisted of ASP.NET Core 2.2,
                Node.js, React.js and SQL Server Management Studio 2017. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui.
              </p>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Technologies I've worked with
              </h3>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
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
