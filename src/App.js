import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';


const styles = {
  formControl: {
    'margin-right': '10px'
  },
  textField: {
    width: 200
  },
  gridButtons: {
    display: 'flex',
    'justify-content': 'flex-end'
  },
  gridImage: {
    display: 'flex',
    'justify-content': 'flex-start'
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar style={styles.toolbar}>
            <Grid item xs={6} sm={4} style={styles.gridImage}>
              <img alt="" src="https://raw.githubusercontent.com/inveniosoftware/invenio/master/docs/_static/invenio.png" width="150px" height="40px"/>
            </Grid>
            <Grid item xs={6} sm={8} style={styles.gridButtons}>
              <FormControl style={styles.formControl}>
                <Button variant="raised" component="span" color="primary">
                  Log in
                </Button>
              </FormControl>
              <FormControl style={styles.formControl}>
                <Button variant="raised" component="span" color="secondary">
                  Sign up
                </Button>
              </FormControl>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
