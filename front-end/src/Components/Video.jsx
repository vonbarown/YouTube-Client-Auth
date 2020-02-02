import React, { Component } from 'react'
import YouTube from 'react-youtube'

class VideoPlayer extends Component {


    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId={this.props.videoId}
                opts={opts}
                onReady={this._onReady}
            />
        );

    }

}

export default VideoPlayer