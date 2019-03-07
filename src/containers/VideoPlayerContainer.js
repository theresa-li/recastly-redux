import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state) => ({
  currentVideo: state.currentVideo
})

var mapDispatchToProps = (dispatch) => {
  return {

  }
}


var VideoPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer)

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
