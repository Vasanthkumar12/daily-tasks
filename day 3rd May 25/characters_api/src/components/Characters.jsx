import React, { useEffect, useState } from 'react'
export const Characters = () => {
    const perPage = 6
    const [characters, setCharacters] = useState([])
    const [paginatedCharacters, setPaginatedCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [flag, setFlag] = useState(true)
    const [time, setTime] = useState('')

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

    const showCard = (id) => {
        console.log(paginatedCharacters)
        let card = paginatedCharacters.filter((item) => item.id == startIndex + id + 1)
        console.log(card, 'filtered')
        setPaginatedCharacters(card)
        setFlag(false)
    }

    return (
        <>
            { flag ? (
                <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        {console.log(paginatedCharacters)}
                        { paginatedCharacters.map((char, index) => (
                            <ol key={index} style={{listStyleType: 'none'}}>
                                <li><img src={char.image} alt="cartoon" /></li>
                                <li>{char.name}</li>
                                <li>{char.species}</li>
                                <li>{char.status}</li>
                                <button onClick={() => showCard(index)}>Description</button>
                            </ol>
                        )) }
                    </div>
                    <div>
                        
                    </div>
                    <button disabled = {currentPage <= 1? true : false} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                    <button>{currentPage}</button>
                    <button disabled = {currentPage >= totalPages ? true : false }  onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                </div>
            ) : (
                <div style={{marginLeft: '30%', marginTop: '30%'}}>
                    { paginatedCharacters.map((char, index) => (
                            <ol key={index} style={{listStyleType: 'none'}}>
                                <li><img src={char.image} alt="cartoon" /></li>
                                <li><strong>name : </strong>{char.name}</li>
                                <li><strong>species : </strong>{char.species}</li>
                                <li><strong>status : </strong>{char.status}</li>
                                <li><strong>type : </strong>{char.type}</li>
                                <li><strong>gender : </strong>{char.gender}</li>
                                <li><strong>origin location : </strong>{char.origin.name}</li>
                                <li><strong>current location : </strong>{char.location.name}</li>
                                <li><strong>episode appearances : </strong>{char.episode.length}</li>
                            </ol>
                        )) 
                    }
                </div>
            )}
        </>
  )
}
