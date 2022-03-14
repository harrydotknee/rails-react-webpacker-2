import React from "react"
import PropTypes from "prop-types"
import GoodbyeWorld from "./GoodbyeWorld";
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <GoodbyeWorld farewell={'see ya'}></GoodbyeWorld>
      </React.Fragment>

    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
