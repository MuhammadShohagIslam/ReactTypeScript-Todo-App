import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { BulkControllerProps } from "../custome.type";

const BulkController = ({
    clearSelected,
    clearCompleted,
    reset,
}: BulkControllerProps) => {
    return (
        <>
            <ButtonGroup>
                <Button color="danger" onClick={clearSelected}>
                    Clear Selected
                </Button>
                <Button color="danger" onClick={clearCompleted}>
                    Clear Completed
                </Button>
                <Button color="danger" onClick={reset}>
                    Reset
                </Button>
            </ButtonGroup>
        </>
    );
};

export default BulkController;
