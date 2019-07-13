import React from 'react';
import { GoBrowser, GoCloudUpload } from 'react-icons/go';
import { IoIosGitNetwork } from 'react-icons/io';
import { FiDatabase } from 'react-icons/fi';

class Technologies extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <GoBrowser className='feature-box__icon' />
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Front End
                </h3>
                <div className='feature-box__text'>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3 / SASS</li>
                    <li>Javascript</li>
                    <li>React / Redux</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <IoIosGitNetwork className='feature-box__icon' />
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Server
                </h3>
                <div className='feature-box__text'>
                  <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>C#</li>
                    <li>.Net Core</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <FiDatabase className='feature-box__icon' />
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Database
                </h3>
                <div className='feature-box__text'>
                  <ul>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>SQL</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <GoCloudUpload className='feature-box__icon' />
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Deployment
                </h3>
                <div className='feature-box__text'>
                  <ul>
                    <li>Git</li>
                    <li>Team Foundation Server</li>
                    <li>AWS S3 / RDS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Technologies;
