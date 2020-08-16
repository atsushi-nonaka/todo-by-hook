import React from 'react';
import { Table } from 'react-bootstrap';

const TodoList = (props) =>{
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todoList.slice(1).map((todo, index) => {
                        return(
                            <tr key={index}>
                                <td>{todo.title}</td>
                                <td>{todo.content}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default TodoList;
