import React from "react";
import { useState } from "react";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

type TodoFormState = {
    text: string;
    description: string;
};

const TodoForm = ({ createTodo }: any) => {
    const [todo, setTodo] = useState<TodoFormState>({
        text: "",
        description: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        createTodo(todo);
        setTodo({
            text: "",
            description: "",
        });
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        name="text"
                        value={todo.text}
                        onChange={handleChange}
                        placeholder="let create task"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enter Your Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        value={todo.description}
                        onChange={handleChange}
                        placeholder="Let's write some description"
                    />
                </FormGroup>
                <Button type="submit">Create A Task</Button>
            </Form>
        </>
    );
};

export default TodoForm;
