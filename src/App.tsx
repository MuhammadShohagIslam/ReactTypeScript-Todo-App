import React from "react";
import "./App.css";
import Todos from "./components/todos/index";
import { Container } from "reactstrap";

function App() {
    return (
        <div className="App">
            <Container>
                <div className="list-item-group">
                    <Todos />
                </div>
            </Container>
        </div>
    );
}

export default App;
