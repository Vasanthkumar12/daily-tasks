import React, { useEffect, useState } from 'react'
export const Characters = () => {
    const perPage = 6
    const [characters, setCharacters] = useState([])
    const [paginatedCharacters, setPaginatedCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    let endIndex = currentPage * perPage
    let startIndex = endIndex - perPage
    let totalPages = Math.ceil(characters.length / 6)

    const fetchCharacters = async () => {
        try {
            let res = await fetch('https://rickandmortyapi.com/api/character')
            let data = await res.json()
            setCharacters(data.results)
            let finalRes = data.results.slice(startIndex, endIndex)
            setPaginatedCharacters(finalRes)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [currentPage])

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                { paginatedCharacters.map((char, index) => (
                    <ol key={index} style={{listStyleType: 'none'}}>
                        <li><img src={char.image} alt="cartoon" /></li>
                        <li>{char.name}</li>
                        <li>{char.species}</li>
                        <li>{char.status}</li>
                    </ol>
                )) }
            </div>
            <div>
                
            </div>
            <button disabled = {currentPage <= 1? true : false} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            <button>{currentPage}</button>
            <button disabled = {currentPage >= totalPages ? true : false }  onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </>
  )
}
