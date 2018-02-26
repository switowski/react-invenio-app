import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Checkbox from 'material-ui/Checkbox';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import ResultsContainer from './modules/results/ResultsContainer';
import SearchFormContainer from './modules/search/SearchFormContainer';
import CountContainer from './modules/count/CountContainer';
import PaginationContainer from './modules/pagination/PaginationContainer';

const styles = {
  toolbar: {
    backgroundColor: 'mediumblue'
  },
  formControl: {
    marginRight: '10px',
  },
  textField: {
    width: 200
  },
  gridButtons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  gridImage: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    margin: '10px'
  }
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar style={styles.toolbar}>
            <Grid container spacing={24}>
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
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={12}>
            <div id="search-form">
              <SearchFormContainer/>
            </div>
            <div id="react-paginate">
              <PaginationContainer/>
            </div>
            <div id="results-count">
              <CountContainer/>
            </div>
            <div id="sorting-configuration">
              <FormControl style={styles.formControl}>
                <InputLabel htmlFor="age-simple">Sort</InputLabel>
                <Select
                  value={""}
                  onChange={() => console.log('test)')}
                  inputProps={{
                    name: 'sort',
                    id: 'sort-conf',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"bestMatch"}>Best Match</MenuItem>
                  <MenuItem value={"title"}>Title</MenuItem>
                  <MenuItem value={"description"}>Description</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div id="direction-configuration">
              <FormControl style={styles.formControl}>
                <InputLabel htmlFor="age-simple">Dir</InputLabel>
                <Select
                  value={""}
                  onChange={() => console.log('test)')}
                  inputProps={{
                    name: 'direction',
                    id: 'direction-conf',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"asc"}>ASC</MenuItem>
                  <MenuItem value={"desc"}>DESC</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={6} sm={2}>
            <div style={styles.root}>
              <List subheader={<ListSubheader component="div">Language</ListSubheader>}>
                {['eng', 'fre', 'english', 'gre', 'rus', 'silent', 'spa', 'zho'].map(value => (
                  <ListItem key={value} dense button>
                    <ListItemText primary={value} />
                    <ListItemSecondaryAction>
                      <Checkbox/>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item xs={6} sm={10}>
            <ResultsContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
