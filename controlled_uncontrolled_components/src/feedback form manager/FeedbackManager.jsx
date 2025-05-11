import React, { useRef, useState, useMemo, useEffect } from 'react'

export const FeedbackManager = () => {
    const [name, setName] = useState('')
    const [feedback, setFeedback] = useState('')
    const [feedbacks, setFeedbacks] = useState([])
    const [search, setSearch] = useState('')
    const [filterObj, setFilterObj] = useState({ select_rating: '' })  
    const [showFiltered, setShowFiltered] = useState(false)
    const ratingRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const rating = ratingRef.current.value

        if(feedback === '' || name === '' || rating === '') {
            alert('Feedback and name should not be empty.')
            return
        }
        
        let obj = { name: name, feedback: feedback, rating: rating, timestamp: Date.now() }
        setFeedbacks([...feedbacks, obj])
        setName('')
        setFeedback('')
        ratingRef.current.value = null
    }

    // Memoized filtered feedback list based on search term
    const filteredFeedbacks = useMemo(() => {
        return feedbacks.filter((fb) => 
            fb.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, feedbacks]); // Recompute only if search or feedbacks change

    const handleChange = (e) => {
        setShowFiltered(true)
        setSearch(e.target.value.trim()) // Update the search term
    }

    const handleClick = () => {
        setFeedbacks([])
    }

    useEffect(() => {
        if(feedbacks.length == 0) return

        let fdbk = feedbacks[feedbacks.length - 1]
        console.log(`${fdbk.name} added a feedback at ${new Date().toLocaleTimeString()}`)

        return () => console.log("Cleanup function called...")

    }, [feedbacks])

    // Filters
    const updateFilters = (e) => {
        const { name, value } = e.target
        setFilterObj({ ...filterObj, [name]: value })
    }
    const applyFilters = () => {
        for(let key in filterObj) {
            let val = filterObj[key]
            // console.log(key, val)
            switch (val) {
                case "4 - 5":
                    console.log("yes 4 - 5")
                    break
                default:
                    console
            }
            let res = feedbacks.filter((fb) => fb.rating )
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} style={{border: '1px solid', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px auto', maxWidth: '300px'}}>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} style={{marginBottom: '10px'}} placeholder="Enter your name" />
            <textarea name="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} style={{marginBottom: '10px'}} placeholder="Enter your feedback" />
            <input type="text" ref={ratingRef} style={{marginBottom: '10px'}} placeholder="Enter your rating" />
            <input type="submit" />
        </form>

        { filteredFeedbacks.length === 0 ? <h1>No Feedback Yet</h1> : (<h1></h1>)}

        { filteredFeedbacks.length >= 10 ? <p>Too many results, please refine your search</p> : (<h1></h1>)}

        { feedbacks.length > 0 && (
            <div>
                <input 
                    type="search" 
                    placeholder="Search by feedback name" 
                    value={search} 
                    onChange={handleChange} 
                />
                <select name="select_rating" id="" onChange={updateFilters}>
                    <option value="">rating</option>
                    <option value="4-5">4 to 5</option>
                    <option value="3-4">3 to 4</option>
                    <option value="2-3">2 to 3</option>
                    <option value="1-2">1 to 2</option>
                </select>
                <button onClick={applyFilters}>Apply</button>
            </div>
        )}

        { filteredFeedbacks.length === 0 && !showFiltered && feedbacks.length > 0 && (
            <div>
                {feedbacks.map((fb, idx) => (
                    <div key={idx} style={{border: '1px solid black', display: 'inline-block', margin: '10px', padding: '5px'}}>
                        <p>Name: {fb.name}</p>
                        <p>Feedback: {fb.feedback}</p>
                        <p>Rating: {fb.rating}</p>
                        <p>Timestamp: {new Date(fb.timestamp).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        )}

        { filteredFeedbacks.length > 0 && (
            <div>
                {filteredFeedbacks.map((fb, idx) => (
                    <div key={idx} style={{border: '1px solid black', display: 'inline-block', margin: '10px', padding: '5px'}}>
                        <p>Name: {fb.name}</p>
                        <p>Feedback: {fb.feedback}</p>
                        <p>Rating: {fb.rating}</p>
                        <p>Timestamp: {new Date(fb.timestamp).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        )}

        { filteredFeedbacks.length > 0 && (<button onClick={handleClick}>Clear all</button>) }
    </div>
  )
}
