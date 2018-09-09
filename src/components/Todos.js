import React, { Component } from 'react';

import { connect } from 'react-redux';

class Todos extends Component {

  render() {
    return (
      <ul className="Todos">

        { this.props.todos.map(todo => (

            <li key={todo.id}>{todo.text}</li>

        )) }

      </ul>
    );
  }
}

// Utilizando a composição do React

const mapStateToProps = state => ({

    todos: state.todos,

});

export default connect(mapStateToProps)(Todos);
