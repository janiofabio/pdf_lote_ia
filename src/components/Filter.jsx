

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      
      <div className="filter-options">
        <h2>Filtro:</h2>
        
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value='All'>Todas</option>
            <option value='Completed'>Completas</option>
            <option value='Incomplete'>Incompletas</option>
          </select>
          <div className="alfa">
          <p>Ordenar:</p>
          <button onClick={() => setSort('A → Z')}>A → Z</button>
          <button onClick={() => setSort('Z → A')}>Z → A</button>
        </div>
        </div>
        
      </div>
    
  )
}

export default Filter;