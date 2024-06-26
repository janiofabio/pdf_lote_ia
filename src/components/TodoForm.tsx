import React, { useState } from 'react';

interface TodoFormProps {
    addTodo: (text: string, category: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue('');
        setCategory('');
    }

    return (
        <div className='todo-form'>
            <h2>Criar Nova Tarefa:</h2>
            <form className='formCriar' onSubmit={handleSubmit}>
                <input value={value} type='text' placeholder='Digite Nome da Tarefa' onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value=''>Selecione uma Categoria</option>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Estudos'>Estudos</option>
                    <option value='Saúde'>Saúde</option>
                </select>
                <div className='btn-div'>
                    <button className='btn-cria' type='submit'>Criar Tarefa</button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;
