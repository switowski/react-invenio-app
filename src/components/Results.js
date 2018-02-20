import React, { Component } from 'react';
import ListResult from './ListResult';
import axios from 'axios';


const styles = {
  listResult: {
    backgroundColor: '#fff',
    margin: '10px'
  }
};

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentWillMount() {
    var _this = this;
    const URL = 'https://videos.cern.ch/api/records/';
    this.props.search(URL);
    // ?sort=bestmatch&q=higg&page=1&size=21
    // this.serverRequest =
    //   axios
    //     .get(URL)
    //     .then(function(result) {
    //       _this.setState({
    //         videos: result.data.hits.hits
    //       });
    //     })
  }

  componentWillUnmount() {
    //this.serverRequest.abort();
  }

  render() {
    const videos = this.props.results.map(function (video) {
      return {
        description: video.metadata.description,
        title: video.metadata.title.title
      }
    })
    return (
        <div style={styles.listResult}>
          <ListResult results={videos}/>
        </div>
    );
  }
}

export default Results;
