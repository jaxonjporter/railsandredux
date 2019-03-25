import React from "react";
import { Link, } from "react-router-dom";
import { Button, Card, Segment,} from "semantic-ui-react";
import { getNotes, } from "../reducers/notes";

import Note from "./Note";
import { connect, } from 'react-redux';

class Home extends React.Component {

componentDidMount() {
  this.props.dispatch(getNotes())
}


render () {
  return (
  <div style={{marginTop: "15px"}}>
    <Segment>
      <h1>Home</h1>
      <Button as={Link} color="blue" to="/newnote" style={{ position: "absolute", bottom: "20px", right: "10px"}}>New Note</Button>

    </Segment>
    <Card.Group itemsPerRow={3}>

    { this.props.notes.map( (t) => {
      return (
       <Note key={t.id} {...t} />
      )
    })
  }
  </Card.Group>
  </div>
)}
}


const mapStateToProps = (state) => {
  return { notes: state.notes, };
}

export default connect(mapStateToProps)(Home);
