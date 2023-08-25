interface IRemoveTodoProps {
    todoId: string;
    onRemove: (id: string) => void;
}

export const RemoveTodo = ({ todoId, onRemove }: IRemoveTodoProps) => {
    const handleRemoveClick = () => {
        onRemove(todoId);
    };

    return (<button onClick={handleRemoveClick}>x</button>)
}