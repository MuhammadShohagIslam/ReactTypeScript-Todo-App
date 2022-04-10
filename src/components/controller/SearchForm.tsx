import React from "react";
import { Button, Input } from "reactstrap";
import { SearchFormProps } from "../custome.type";

const SearchForm = ({ trim, handleSearch, toggleForm }: SearchFormProps) => {
    return (
        <>
            <div className="d-flex mb-3">
                <Input
                    placeholder="Enter Search Term"
                    value={trim}
                    onChange={handleSearch}
                />
                <Button className="mr-2" color="success" onClick={toggleForm}>
                    New
                </Button>
            </div>
        </>
    );
};

export default SearchForm;
