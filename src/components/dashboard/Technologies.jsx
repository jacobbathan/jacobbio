import React from 'react';

class Technologies extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section class='section-features'>
          <div class='row'>
            <div class='col-1-of-4'>
              <div class='feature-box'>
                <i class='feature-box__icon icon-basic-world' />
                <h3 class='heading-tertiary u-margin-bottom-small'>
                  Explore the world
                </h3>
                <p class='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class='col-1-of-4'>
              <div class='feature-box'>
                <i class='feature-box__icon icon-basic-compass' />
                <h3 class='heading-tertiary u-margin-bottom-small'>
                  Meet nature
                </h3>
                <p class='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class='col-1-of-4'>
              <div class='feature-box'>
                <i class='feature-box__icon icon-basic-map' />
                <h3 class='heading-tertiary u-margin-bottom-small'>
                  Find your way
                </h3>
                <p class='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div class='col-1-of-4'>
              <div class='feature-box'>
                <i class='feature-box__icon icon-basic-heart' />
                <h3 class='heading-tertiary u-margin-bottom-small'>
                  Live a healthier life
                </h3>
                <p class='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Technologies;
