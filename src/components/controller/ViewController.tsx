import React from "react";
import { Input, Label } from "reactstrap";
import { ViewControllerProps } from "../custome.type";

const ViewController = ({ value, handleView }: ViewControllerProps) => {
    return (
        <>
            <div className="d-flex">
                <Label for="view-list" className="mr-4">
                    <Input
                        name="view"
                        type="radio"
                        value="list"
                        id="view-list"
                        onChange={handleView}
                        checked={value === "list"}
                        className="d-inline-block"
                    />
                    List
                </Label>

                <Label for="view-table" className="mr-4">
                    <Input
                        name="view"
                        type="radio"
                        value="table"
                        id="view-table"
                        onChange={handleView}
                        className="d-inline-block"
                        checked={value === "table"}
                    />
                    Table
                </Label>
            </div>
        </>
    );
};

export default ViewController;
