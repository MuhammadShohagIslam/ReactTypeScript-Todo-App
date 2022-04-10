import React, { useState } from "react";
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";
import shortid from "shortid";
import TodoForm from "../create-todo-form";
import { Items, SingleItem } from "../custome.type";
import ListView from "../listView";
import TableView from "../tableView";
import Controller from "./../controller/index";

const Todo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState("list");
    const [category, setCategory] = useState("all");
    const [trim, setTrim] = useState("");
    const [todos, setTodos] = useState<Items["todos"]>([
        {
            id: "1",
            text: "aa",
            description: "aaaa",
            isComplete: true,
            time: new Date(),
            isSelect: true,
        },
        {
            id: "2",
            text: "aa",
            description: "aaaa",
            isComplete: false,
            time: new Date(),
            isSelect: false,
        },
    ]);

    const toggleComplete = (todoId: string) => {
        const allTodos = [...todos];
        let singleTodo = allTodos.find((t) => t.id === todoId);
        singleTodo!.isComplete = !singleTodo!.isComplete;
        setTodos(allTodos);
    };
    const toggleSelect = (todoId: string) => {
        const allTodos = [...todos];
        const singleTodo = allTodos.find((todo) => todo.id === todoId);
        singleTodo!.isSelect = !singleTodo!.isSelect;
        setTodos(allTodos);
    };
    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const createTodo = (todo: SingleItem["todo"]) => {
        todo.id = shortid.generate();
        todo.text = todo.text;
        todo.isComplete = true;
        todo.time = new Date();
        todo.isSelect = true;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        toggleForm();
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTrim(event.target.value);
    };

    const performSearch = () => {
        return todos.filter((todo) =>
            todo.text.toLowerCase().includes(trim.toLowerCase())
        );
    };
    const handleCategories = (value: string) => {
        setCategory(value);
    };

    const performFilter = (allTodos: Items["todos"]) => {
        if (category === "completed") {
            return allTodos.filter((todo) => todo.isComplete);
        } else if (category === "running") {
            return allTodos.filter((todo) => !todo.isComplete);
        } else {
            return allTodos;
        }
    };

    const handleView = (event: React.ChangeEvent<HTMLInputElement>) => {
        setView(event.target.value);
    };

    const getView = () => {
        let todos = performSearch();
        todos = performFilter(todos);
        return view === "list" ? (
            <ListView
                todos={todos}
                toggleComplete={toggleComplete}
                toggleSelect={toggleSelect}
            />
        ) : (
            <TableView
                todos={todos}
                toggleComplete={toggleComplete}
                toggleSelect={toggleSelect}
            />
        );
    };
    const reset = () => {
        setTodos([]);
    };
    const clearCompleted = () => {
        const clearCompleteTodo = todos.filter((todo) => !todo.isComplete);
        setTodos(clearCompleteTodo);
    };
    const clearSelected = () => {
        const clearSelectTodo = todos.filter((todo) => !todo.isSelect);
        setTodos(clearSelectTodo);
    };

    return (
        <>
            <Container>
                <div className="list-item-group">
                    <h2 className="text-center">Stack Todo App</h2>
                    <Controller
                        handleSearch={handleSearch}
                        trim={trim}
                        toggleForm={toggleForm}
                        handleCategories={handleCategories}
                        category={category}
                        value={view}
                        handleView={handleView}
                        reset={reset}
                        clearCompleted={clearCompleted}
                        clearSelected={clearSelected}
                    />
                    {getView()}
                </div>
            </Container>
            <Modal isOpen={isOpen} toggle={toggleForm}>
                <ModalHeader toggle={toggleForm}>Create A New Todo</ModalHeader>
                <ModalBody>
                    <TodoForm createTodo={createTodo} />
                </ModalBody>
            </Modal>
        </>
    );
};

export default Todo;
