import React from 'react';
import propTypes from 'prop-types';

const Banner = (props) => {
  return (
    <div>
        <p>Banner</p>
        <p>{props.name}, {props.age}</p>
    </div>
  )
}

/*
    npm i prop-types
    Used for defining the datatypes of the props, good practice
*/

Banner.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}
// Used for defining the default behaviour in case the props are not passed 
Banner.defaultProps = {
    name: "Name",
    age: 0
}

export default Banner;