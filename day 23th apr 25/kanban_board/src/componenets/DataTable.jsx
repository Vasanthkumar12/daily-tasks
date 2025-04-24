import React, { useState } from 'react'

export const DataTable = () => {
    let userData = []
    const [per_page, setPer_page] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const generateUserData = () => {
        const start = Date.now();
        
        userData = new Array(100).fill(0).map((_, i) => {
            return({
                id: i + 1,
                name: `User${i}`,
                email: `user${i}@gmail.com`,
                status: Math.random() > 0.5 ? 'Active' : 'Inactive',
                lastLogin: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()
            })
        })
        
       
    }

    generateUserData()
    console.log(userData)
    console.log(per_page)

    // Pagination
    let totalPages = Math.ceil(userData.length / per_page)
    let startIdx = (currentPage - 1) * per_page
    let endIdx = currentPage * per_page
    let paginatedUsers = userData.slice(startIdx, endIdx)

    const goToPrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1))
    }
    
    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages))
    }


  return (
    <>
        <div style={{margin:'auto', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <select onChange={(e) => setPer_page(e.target.value)} name="per_page" id="per_page" style={{display:'flex', alignSelf:'center', padding:'5px 10px', marginBottom: '5px'}}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th style={{border: '1px solid black', padding: '10px'}}>Id</th>
                        <th style={{border: '1px solid black', padding: '10px'}}>Name</th>
                        <th style={{border: '1px solid black', padding: '10px'}}>Email</th>
                        <th style={{border: '1px solid black', padding: '10px'}}>Status</th>
                        <th style={{border: '1px solid black', padding: '10px'}}>LastLogin</th>
                    </tr>
                </thead>

                <tbody>
                    {paginatedUsers.map((user, index) => (
                        <tr key={index} style={{border: '1px solid black'}}>
                            <td style={{border: '1px solid black', padding: '10px 40px'}}>{user.id}</td>
                            <td style={{border: '1px solid black', padding: '10px 40px'}}>{user.name}</td>
                            <td style={{border: '1px solid black', padding: '10px 40px'}}>{user.email}</td>
                            <td style={{border: '1px solid black', padding: '10px 40px'}}>{user.status}</td>
                            <td style={{border: '1px solid black', padding: '10px 40px'}}>{user.lastLogin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{marginTop: '10px', display:'flex', justifyContent:'space-around'}}>
                <button onClick={goToPrevPage} disabled={currentPage == 1}>Previous</button>
                {
                    [...Array(totalPages)].map((_, i) => (
                        <button key={i} onClick={() => setCurrentPage(i+1)} style={{fontWeight: currentPage == i+1 ? 'bold' : 'normal', color: currentPage == i+1 ? 'red' : 'black' }}>
                            { i+1 }
                        </button>
                    ))        
                }
                {/* <button>{currentPage}</button> */}
                <button onClick={goToNextPage} disabled={currentPage == totalPages}>Next</button>
            </div>
        </div>
    </>
  )
}
