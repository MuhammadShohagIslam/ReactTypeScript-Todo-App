import React from "react";
import SearchForm from "./SearchForm";
import {ControllerProps} from '../custome.type'
import FilterCategories from "./FilterCategories";
import ViewController from "./ViewController";
import BulkController from "./BulkController";

const Controller = ({handleSearch, trim, toggleForm, handleCategories,category, value,handleView, clearSelected, clearCompleted,reset}:ControllerProps) => {
    return (
        <>
            <SearchForm handleSearch={handleSearch} trim={trim} toggleForm={toggleForm}/>
            <div className="d-flex-a">
                    <FilterCategories handleCategories= {handleCategories}category={category}/>
                    <ViewController value={value} handleView={handleView}/>
                    <BulkController clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset}/>
            </div>
        </>
    );
}

export default Controller;