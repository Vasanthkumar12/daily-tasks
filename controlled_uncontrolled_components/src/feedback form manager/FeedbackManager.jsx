import React, { useRef, useState } from 'react'

export const FeedbackManager = () => {
    const [name, setName] = useState('')
    const [feedback, setFeedback] = useState('')
    const [feedbacks, setFeedbacks] = useState([])
    const [filteredFbs, setFilteredFbs] = useState([])
    const [showFiltered, setShowFiltered] = useState(false)
    const ratingRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const rating = ratingRef.current.value

        if(feedback == '' || name == '' || rating == '') {
            alert('feedback and name should not be empty.')
            return
        }
        
        let obj = { name: name, feedback: feedback, rating: rating, timestamp: Date.now() }
        setFeedbacks([...feedbacks, obj])
        setName('')
        setFeedback('')
        ratingRef.current.value = null
    }

    const handleChange = (e) => {
        let searchWord = e.target.value.trim()
        searchWord = searchWord.toLowerCase()
        if(searchWord.length > 0) {
            setShowFiltered(true)
        }
        let res = feedbacks.filter((fb) => fb.name.toLowerCase().includes(searchWord))
        setFilteredFbs(res)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} style={{border: '1px solid', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px auto', maxWidth: '300px'}}>
            <input type="text" name ='name' value={name} onChange={(e) => setName(e.target.value)} style={{marginBottom: '10px'}} placeholder='Enter your name' /><br />

            <textarea name="feedback" style={{marginBottom: '10px'}} placeholder='Enter your feedback' id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} ></textarea><br />
           
            <input type="text" ref={ratingRef} style={{marginBottom: '10px'}} placeholder='Enter your rating' /><br />

            <input type="submit" />
        </form>

        { feedbacks.length > 0 && <div>
            <input type='search' placeholder='Search by feedback name' onChange={handleChange} />
            </div>}
        
        { filteredFbs.length == 0 && !showFiltered && feedbacks.map((fb) => (
            <div style={{border: '1px solid black', display: 'inline-block', margin: '10px', padding: '5px'}}>
                <p>Name : {fb.name}</p>
                <p>Feedback :  {fb.feedback}</p>
                <p>Rating : {fb.rating}</p>
                <p>Timestamp : {fb.timestamp}</p>
            </div>

        ))}

        { filteredFbs.length > 0 && filteredFbs.map((fb) => (
            <div style={{border: '1px solid black', display: 'inline-block', margin: '10px', padding: '5px'}}>
                <p>Name : {fb.name}</p>
                <p>Feedback :  {fb.feedback}</p>
                <p>Rating : {fb.rating}</p>
                <p>Timestamp : {fb.timestamp}</p>
            </div>

        ))}
    </div>
  )
}
