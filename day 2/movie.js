// **Task: Movie List**

// You have a Movie List in the format:

let data = [
  {
    "movieName": "The Shawshank Redemption",
    "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    "rating": 4.8,
    "bestScenes": [
      {
        "title": "Andy Dufresne escapes from prison",
        "duration": "15 mins"
      },
      {
        "title": "Brooks was here",
        "duration": "10 mins"
      }
    ]
  },
  {
    "movieName": "The Godfather",
    "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
    "rating": 4.9,
    "bestScenes": [
      {
        "title": "Horse head in bed",
        "duration": "5 mins"
      },
      {
        "title": "Cannoli scene",
        "duration": "3 mins"
      }
    ]
  },
  {
    "movieName": "The Dark Knight",
    "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "rating": 4.8,
    "bestScenes": [
      {
        "title": "Opening bank robbery",
        "duration": "12 mins"
      },
      {
        "title": "Why So Serious interrogation",
        "duration": "8 mins"
      }
    ]
  },
  {
    "movieName": "The Lord of the Rings: The Return of the King",
    "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    "rating": 4.9,
    "bestScenes": [
      {
        "title": "Ride of the Rohirrim",
        "duration": "10 mins"
      },
      {
        "title": "Frodo destroys the One Ring",
        "duration": "7 mins"
      }
    ]
  }
]

// You need to perform the following tasks:

// 1. **Find Best Scene Duration per Movie:** Write a JavaScript function that iterates through each movie’s `bestScenes` array and finds the scene with the longest duration. Return an object containing the movie name and the longest scene’s duration. (e.g., { movieName: “The Shawshank Redemption”, longestSceneDuration: 15 })

function getLongestDUration(data) {
    let movies = []
    data.map((movie) => {
        let max = 0
        movie.bestScenes.map((scene) => {
            let durate = parseInt(scene.duration)
            if(durate > max) {
                max = durate
            }
        })
        console.log(max)
        movies.push({"movieName": movie.movieName}, {longestSceneDuration: max} )
    })
    return movies
}

console.log(getLongestDUration(data))

// 2. **Total Duration of Best Scenes:** Calculate the total duration of all the “best scenes” across all movies.



// 3. **Find All Unique Actors:** Write a JavaScript function that iterates through the movie list and returns a list containing all the unique actors across all movies.
// 4. **Average Rating with Reduce:** Utilize the `reduce` method to calculate the average movie rating based on the provided ratings.
// 5. **Modify Movie List:** How would you modify the JSON structure to include additional information like release year and genre for each movie?
// 6. **Filter by Rating:** Create a function that takes the movie list and a specific rating as input. The function should return a new list containing only movies with that particular rating.
// 7. **Sort Movie List:** Explain how you would achieve sorting the movie list in JavaScript. You can sort by either rating (descending) or movie name (alphabetical).

