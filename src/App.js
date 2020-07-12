import React from 'react';
// import Container from '@material-ui/core/Container';
import Nav from './component/nav'
import Form from './component/form'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/" render={props => <Box display="flex" flexDirection="column" p={2} m={5}>
        <Box display = "flex" justifyContent="center" ><strong>Go to http://localhost:3000/user</strong></Box>
        </Box>
        } />
        <Route exact path="/user" render={props => <Box display="flex"  flexDirection="column" p={2} m={5}>
        <Box><Grid item xs={12} ><Nav/></Grid></Box>
        <Box><Grid item xs={12} ><Form/></Grid></Box>
        </Box>
        } />
    </Router>
  );
}

export default App;
