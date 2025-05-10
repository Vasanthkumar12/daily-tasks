import React, { useRef, useState, useMemo } from 'react'

export const FeedbackManager = () => {
    const [name, setName] = useState('')
    const [feedback, setFeedback] = useState('')
    const [feedbacks, setFeedbacks] = useState([])
    const [search, setSearch] = useState('')
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
    </div>
  )
}
