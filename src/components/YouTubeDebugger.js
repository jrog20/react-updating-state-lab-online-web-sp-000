import React from 'react';
 
class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    // Define the initial state
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
 
  handleBitrate = () => {
    // Updates the state 
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });    
  }

  handleResolution = () => {
    // Updates the state 
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    });    
  }
 
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrate}>Bitrate = {this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.handleResolution}>Resolution = {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;