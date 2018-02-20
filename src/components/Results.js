import React, { Component } from 'react';
import ListResult from './ListResult';


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
    const URL = 'https://videos.cern.ch/api/records/';
    this.props.search(URL);
  }

  render() {
    const videos = this.props.results.map(function (video) {
      return {
        description: video.metadata.description,
        title: video.metadata.title.title
      }
    })
    if (this.props.isFetching) {
      return (<h3>Loading...</h3>);
    } else {
      return (
        <div style={styles.listResult}>
          <ListResult results={videos}/>
        </div>
      );
    }
  }
}

export default Results;
