import React, { Component, Fragment } from 'react';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export class TodoList1 extends Component {

    state = {
        newTodoText: '',
    }

    /* addTodo = async () => {

        const { newTodoText } = this.state;
    
        await this.props.addTodo({
          variables: { text: newTodoText },
          update: (proxy, { data: { createTodo } }) => {
            this.props.todos.refetch();
          },
        })

    }; 

    removeTodo = async (idTodo) => {
    
        await this.props.removeTodo({
          variables: { id: idTodo },
          update: (proxy, { data: { removeTodo } }) => {
            this.props.todos.refetch();
          },
        })

    }; */

    renderTodoList = async () => {

        // console.log(this.props.todos.allTodoes);

        /* <ul>

            { this.props.allTodoes.map(todo => (

                <li key={todo.id}>{todo.text}</li>

            )) }

        </ul> */

    }

  render() {

    // console.log(this.props);

    const { todos } = this.props;

    return (

        <Fragment>

        {
             // this.renderTodoList()
        
            <ul>

            { this.props.allTodoes.map(todo => (

                <li key={todo.id}>{todo.text}
                <input type="submit" value="Remover" onClick={() => this.removeTodo(todo.id)} />
                </li>

            )) }

            </ul>        
        }

        <input
          type="text"
          value={this.state.newTodoText}
          onChange={e => this.setState({ newTodoText: e.target.value })}
        />

        <input type="submit" value="Criar" onClick={() => this.addTodo()} />

        </Fragment>
      
    );
  }
}

const TodosQuery = gql`

    query {

        allTodoes {

            id
            text

        }


    }

`;

const TodoMutation = gql`
  mutation ($text: String!) {
    createTodo ( text: $text ) {
      id
      text
      completed
    }
  }
`;

/*

  mutation ($id: ID!) {
  
        deleteTodo(id: $id) (
      
            id
      
        ) {
    
        id
        text
    
       }
    
    }

*/

const TodoRemoveMutation = gql`
    
mutation removeTodo($id: ID!) {

    deleteTodo(id: $id) {
      id
      text
    }
    
  }
  
`;

// Usando a comoposição do React

/* export default compose(

    graphql(TodoMutation, { name: 'addTodo' }),
    graphql(TodoRemoveMutation, { name: 'removeTodo' }),
    graphql(TodosQuery)

)(TodoList1); */

const TodoList1Wrapper = compose(

    graphql(TodoMutation, { name: 'addTodo' }),
    graphql(TodoRemoveMutation, { name: 'removeTodo' }),
    graphql(TodosQuery, { name: 'todos' })

)(TodoList1);

export default TodoList1Wrapper;
