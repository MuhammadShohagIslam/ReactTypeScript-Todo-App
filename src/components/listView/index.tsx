import React from "react";
import { ListGroup, ListGroupItem, Button, Input } from "reactstrap";
import { SingleItem, Items } from "../custome.type";

const ListItem = ({ todo, toggleSelect, toggleComplete }: SingleItem) => {
    return (
        <>
            <ListGroupItem className="d-flex align-items-center">
                <Input
                    type="checkbox"
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
                <div className="mx-3">
                    <h4>{todo.text}</h4>
                    <p>{todo.time.toDateString()}</p>
                </div>
                <div className="mx-3">
                    <p>{todo.description}</p>
                </div>
                <Button
                    className="mr-auto"
                    color={todo.isComplete ? "danger" : "success"}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? "Completed" : "Running"}
                </Button>
            </ListGroupItem>
        </>
    );
};

const ListView = ({ todos, toggleSelect, toggleComplete }: Items) => {
    return (
        <>
            <ListGroup>
                {todos.map((todo) => {
                    return (
                        <ListItem
                            key={todo.id}
                            todo={todo}
                            toggleSelect={toggleSelect}
                            toggleComplete={toggleComplete}
                        />
                    );
                })}
            </ListGroup>
        </>
    );
};

export default ListView;
