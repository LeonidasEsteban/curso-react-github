
import { useState } from 'react'
import styled from 'styled-components'

const Avatar = styled.img`
  border: 10px solid black;
  border: 1px solid blue;

`

function User({ color, name, avatar, counter }) {
  const [calculatedName, setCalculatedName] = useState(name)


  const newName = `${calculatedName} es muy lindo!`

  function onClick() {
    setCalculatedName('Pikachu')

    console.log(`hola ${name}, este es un click onClick`)
  }

  return (
    <div className="User" onClick={onClick}>
      <Avatar src={avatar} title={name} alt={name} />
      <p>hemos dado click en {newName} por {counter} veces</p>
    </div>
  )
}

export default User