import React from 'react';

interface TodoProps {
    todo: {
        id: number;
        text: string;
        category: string;
        isCompleted: boolean;
    };
    removeTodo: (id: number) => void;
    completeTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className='todo' style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <div className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </div>
            <div className='buttons'>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>Remover</button>
            </div>
        </div>
    );
};

export default Todo;
