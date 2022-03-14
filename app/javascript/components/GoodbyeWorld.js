import React from "react"
import PropTypes from "prop-types"
class GoodbyeWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Farewell: {this.props.farewell}
      </React.Fragment>
    );
  }
}

GoodbyeWorld.propTypes = {
  farewell: PropTypes.string
};
export default GoodbyeWorld
