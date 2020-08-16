import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const TodoList = (props) =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [todoList, setTodoList] = useState([{
                                                title: '',
                                                content: ''
                                            }]);

    let form;
    let titleErrorText;
    let contentErrorText;

    const initState = () =>{
        setTitle('');
        setContent('');
    }

    const handleTitle = (event) =>{
        const title = event.target.value;
        setTitle(title);
    }

    const handleContent = (event) =>{
        const content = event.target.value;
        setContent(content);
    }

    const submitted = () =>{
        let todoItem = {
            title: title,
            content: content
        }

        setTodoList(todoList.concat(todoItem));
        setIsSubmitted(!isSubmitted);
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000);
        initState();
    }

    const deleteButton = (index) =>{
        const newTodoList = [...todoList];
        newTodoList.splice(index + 1, 1)
        setTodoList(newTodoList);
    }

    if(title === ''){
        titleErrorText = "title doesn't exist";
    }else{
        titleErrorText = "title exists";
    }

    if(content === ''){
        contentErrorText = "content doesn't exist";
    }else{
        contentErrorText = "content exists";
    }

    if(isSubmitted){
        form = (
            <h4>Sent Successfully</h4>
        );
    }else{
        form =(
            <div>
                <Form onSubmit={submitted}>
                    <Form.Group controlId="formTitleId">
                        <Form.Label><h5>Title<small className="ml-2">(within 30 letters)</small></h5></Form.Label>
                        <Form.Control 
                            className="w-50" 
                            type="text" 
                            name="title"
                            maxLength="30"
                            value={title} 
                            placeholder="title"
                            onChange={(event)=>{
                                handleTitle(event);
                            }} />
                        <Form.Text>
                            {titleErrorText}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formContentId">
                        <Form.Label><h5>Content<small className="ml-2">(within 200 letters)</small></h5></Form.Label>
                        <Form.Control
                            className="w-50"
                            as="textarea" 
                            name="content"
                            maxLength="200"
                            rows="5"
                            placeholder="content"
                            value={content}
                            onChange={(event)=>{
                                handleContent(event);
                            }}
                        />
                        <Form.Text>
                            {contentErrorText}
                        </Form.Text>
                    </Form.Group>
                    <Button 
                        type="submit"
                        disabled={title === '' || content === ''}
                    >Registration</Button>
                </Form>
            </div>
        );
    }

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>content</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.slice(1).map((todo, index) => {
                        return(
                            <tr key={index}>
                                <td>{todo.title}</td>
                                <td>{todo.content}</td>
                                <td><Button 
                                    variant="danger"
                                    onClick={() =>{
                                        deleteButton(index)
                                    }}
                                >Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div className="registration">
                <h2>Registration</h2>
                {form}
            </div>
        </div>
    );
}

export default TodoList;
