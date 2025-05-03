import React, { useEffect, useState } from 'react'
export const Characters = () => {
    const [characters, setCharacters] = useState([])

    const fetchCharacters = async() => {
        try {
            let res = await fetch('https://rickandmortyapi.com/api/character')
            let data = await res.json()
            setCharacters(data.results)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [characters])
    return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        { characters.map((char, index) => (
            <ol key={index} style={{listStyleType: 'none'}}>
                <li><img src={char.image} alt="cartoon" /></li>
                <li>{char.name}</li>
                <li>{char.species}</li>
                <li>{char.status}</li>
            </ol>
        )) }

        
    </div>
  )
}
