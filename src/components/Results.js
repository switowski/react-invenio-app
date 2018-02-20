import axios from 'axios';
import React, { Component } from 'react';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [{}] };
  }

  componentDidMount() {
    var _this = this;
    const URL = 'https://videos.cern.ch/api/records/';

    // ?sort=bestmatch&q=higg&page=1&size=21
    this.serverRequest =
      axios
        .get(URL)
        .then(function(result) {
          _this.setState({
            videos: result.data.hits.hits
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
        <div>
          {this.state.videos.map(function(video) {
            return (
              <div>
                {video.id}
              </div>
            );
          })}
        </div>
    );
  }
}

export default Results;
