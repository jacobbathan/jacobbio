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
              {/* <h3 className='heading-tertiary u-margin-bottom-small' /> */}
              <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at porttitor sapien, in venenatis leo. Sed porta nisl in nunc
                dictum, in dignissim nisi viverra. Donec viverra porta justo,
                eget finibus turpis semper non. Fusce euismod dui sed maximus
                sodales. Pellentesque facilisis ipsum nunc, sed feugiat sem
                volutpat feugiat. Donec pulvinar, purus id bibendum dignissim,
                tortor turpis ultrices ex, sed blandit est lectus sit amet
                magna. Curabitur eros leo, rutrum at vulputate eu, ultrices at
                lacus. Etiam eget aliquam lacus. Praesent condimentum blandit mi
                eu venenatis. Suspendisse odio nunc, fermentum sed scelerisque
                et, consectetur in neque. Aliquam in ipsum non diam posuere
                cursus. Suspendisse potenti. Nullam congue tempor erat, sed
                sodales odio elementum sit amet. Duis porttitor, risus vel
                eleifend efficitur, ligula nibh sollicitudin mauris, vel
                fermentum metus nisl id ipsum. In hac habitasse platea dictumst.
                Vestibulum lobortis nec nisi sed eleifend. Proin placerat elit
                id mi consequat, at vestibulum ex sodales. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Cras vel condimentum nunc,
                interdum pellentesque eros. Morbi vitae gravida orci, eu mollis
                libero. Duis viverra sit amet erat vel rhoncus. Donec
                pellentesque justo eget diam vehicula, vitae fermentum or
                pharetra. Donec id ipsum finibus, vulputate augue.
              </p>
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
