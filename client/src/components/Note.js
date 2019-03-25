import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from "react-router-dom";
import { Button, Card, } from "semantic-ui-react"
import EditForm from './EditForm';

class Note extends React.Component {
  state = { edit: false }

  toggle = () => (this.setState({edit: !this.state.edit})) 

  setId = () => (this.props.id)


render () {
  const id = this.props.id
  const note = {id: this.props.id, name: this.props.name, description: this.props.description, }
  return(

    <Card>
    { this.state.edit ? <EditForm note={note} toggle={this.toggle}/> :
    <Card.Content>
        {note.name}
      <Card.Meta>
        {note.description}
      </Card.Meta>
    </Card.Content>
   }
    <Card.Content extra>
    <Button onClick={() => this.props.dispatch({ type: 'DELETE_NOTE', id })}>Delete</Button>
    <Button onClick={() => this.toggle()}> Edit</Button>
    </Card.Content>
    </Card>
    
    )
    
  }
  } 
export default connect()(Note);