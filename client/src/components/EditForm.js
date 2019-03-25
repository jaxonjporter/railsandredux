import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Form, Header, Button, Card } from 'semantic-ui-react';

class EditForm extends React.Component {
  state = { id: this.props.note.id, name: '', description: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, } = this.props;
    const { name, description, id, } = this.state;
    const note = { name, description, id, };
    dispatch({ type: 'EDIT_NOTE', note,});
    this.props.toggle()
    this.setState({ name: '', description: '', });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }


  render() {
    const { name, description } = this.state;

    return (
      <Card.Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input name="name" value={name} onChange={this.handleChange} placeholder={this.props.note.name} required />
          <Form.Input name="description" value={description} onChange={this.handleChange} placeholder={this.props.note.description} required/>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </Card.Content>
    )
  }
}




export default connect()(EditForm);
