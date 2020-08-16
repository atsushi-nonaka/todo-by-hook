import React, { useState } from 'react';
import TodoList from './todo-list';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const Registration = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [todoList, setTodoList] = useState([{
                                                title: '',
                                                content: ''
                                            }]);

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

    const deleteTodoList = () =>{
        setTodoList(todoList.splice(1));
    }

    let form;
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
                                handleTitle(event)
                            }} />
                        <Form.Text>
                            test
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
                                handleContent(event)
                            }}
                        />
                    </Form.Group>
                    <Button type="submit">Registration</Button>
                </Form>
                <Button onClick={deleteTodoList}>Delete</Button>
            </div>
        );
    }
    return(
        <div className="registration">
            <TodoList 
                todoList={todoList}
            />
            <h2>Registration</h2>
            {form}
        </div>
    );
    
}

export default Registration;