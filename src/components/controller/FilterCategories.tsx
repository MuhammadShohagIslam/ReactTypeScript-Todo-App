import React from 'react'
import {ButtonGroup, Button} from 'reactstrap'
import { FilterCategoriesProps } from '../custome.type';

const FilterCategories = ({handleCategories, category}:FilterCategoriesProps) => {
    return (
        <>
            <ButtonGroup>
                    <Button color={category === 'all' ? 'success':"secondary"}  onClick={() => handleCategories("all")}>All</Button>
                    <Button color={category === 'completed' ? 'warning':"secondary"} onClick={() => handleCategories("completed")}>Completed</Button>
                    <Button color={category === 'running' ? 'danger':"secondary"} onClick={() => handleCategories("running")}>Running</Button>
            </ButtonGroup>
        </>
    );
}

export default FilterCategories;