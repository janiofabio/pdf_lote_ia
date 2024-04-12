import React from 'react';

interface SearchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
    return (
        <div className="search">
            <h2>Pesquisar:</h2>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar Tarefa...'></input>
        </div>
    );
};

export default Search;
