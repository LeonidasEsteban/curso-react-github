import styled from 'styled-components'
import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'
const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }
  .action-list {
    display: flex;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: .5rem;
  }
`

function Filters({ repoListCount, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value)
  }
  return (
    <FiltersStyled>
      <h2 className="count">
        Repositorios {repoListCount}
      </h2>
      <div className="action-list">
        <InputText
          placeholder="Busca un repositorio"
          type="search"
          onChange={handleChange}
        />
        <div className="select-list">

          <Selector>
            <option value="all" >all</option>
            <option value="forks">forks</option>
          </Selector>
          <Selector>
            <option value="lenguaje" disabled>lenguaje</option>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
          </Selector>
          <Selector>
            <option value="ordenar" disabled>ordenar</option>
            <option value="stars">stars</option>
          </Selector>
        </div>

      </div>
      <Separator />
    </FiltersStyled>
  )
}

export default Filters
