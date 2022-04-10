export type SingleItem = {
    todo: {
        id: string;
        text: string;
        description: string;
        time: Date;
        isSelect: boolean;
        isComplete: boolean;
    };
    toggleSelect: (id: string) => void;
    toggleComplete: (id: string) => void;
};

export type Items = {
    todos: {
        id: string;
        text: string;
        description: string;
        time: Date;
        isSelect: boolean;
        isComplete: boolean;
    }[];
    toggleSelect: (id: string) => void;
    toggleComplete: (id: string) => void;
};

export type SearchFormProps = {
    trim: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleForm: () => void;
};

export type ViewControllerProps = {
    value: string;
    handleView: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FilterCategoriesProps = {
    category: string;
    handleCategories: (value: string) => void;
};

export type BulkControllerProps = {
    clearSelected: () => void;
    clearCompleted: () => void;
    reset: () => void;
};

export type ControllerProps = SearchFormProps &
    ViewControllerProps &
    FilterCategoriesProps &
    BulkControllerProps;
