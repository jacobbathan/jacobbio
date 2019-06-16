import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='section-about' style={{ marginTop: '5rem' }}>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>Projects</h2>

            <div className=''>
              <div className='col-1-of-2'>
                {/* <h3 className='heading-tertiary u-margin-bottom-small' /> */}
                <p className='paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  at porttitor sapien, in venenatis leo. Sed porta nisl in nunc
                  dictum, in dignissim nisi viverra. Donec viverra porta justo,
                  eget finibus turpis semper non. Fusce euismod dui sed maximus
                  sodales. Pellentesque facilisis ipsum nunc, sed feugiat sem
                  volutpat feugiat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
