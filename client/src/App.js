import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from './components/Home';
import NoteForm from './components/NoteForm'
import EditForm from './components/EditForm'
import { Container, } from 'semantic-ui-react'

const App = () => ( 
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/newnote" component={NoteForm} />
      <Route exact path="/editnote" component={EditForm} />
    </Switch>
  </Container>
);


export default App;

