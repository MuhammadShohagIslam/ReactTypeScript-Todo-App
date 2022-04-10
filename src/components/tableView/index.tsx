import React from "react";
import { Button, Input, Table } from "reactstrap";

import { SingleItem, Items } from "../custome.type";

const TableItem = ({ todo, toggleSelect, toggleComplete }: SingleItem) => {
    return (
        <>
            <tr>
                <td>
                    <Input
                        type="checkbox"
                        id={todo.id}
                        checked={todo.isSelect}
                        onChange={() => toggleSelect(todo.id)}
                    />
                </td>
                <td>{todo.time.toDateString()}</td>
                <td>{todo.text}</td>
                <td>{todo.description}</td>
                <td>
                    <Button
                        color={todo.isComplete ? "danger" : "success"}
                        onClick={() => toggleComplete(todo.id)}
                    >
                        {todo.isComplete ? "Completed" : "Running"}
                    </Button>
                </td>
            </tr>
        </>
    );
};

const TableView = ({ todos, toggleSelect, toggleComplete }: Items) => {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>Text</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <TableItem
                                key={todo.id}
                                todo={todo}
                                toggleSelect={toggleSelect}
                                toggleComplete={toggleComplete}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default TableView;
