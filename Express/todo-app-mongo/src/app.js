import express from 'express'
import { config } from './config/app.config.js'
import todo_router from './todo/router.js'

const app = express()

const port = config.app.port

app.set('port', port)

app.use(express.json())

app.use('api/todo', todo_router)

app.get('/', (_req, res) => {
    res.send({
        projects: {
            todo: {
                todo_endpoints: {
                    "Get all todos": "GET api/todo/all",
                    "Get todo by id": "GET api/todo/{id}",
                    "Create a todo": "POST api/todo/create",
                    "Update todo": "PUT api/todo/update/{id}",
                    "Delete todo": "DELETE api/todo/delete/{id}"
                },
                todo_response_schema: {
                    id: "1",
                    title: "Wash the dishes",
                    description: "I've to whash the dishes before at 6:00 pm.",
                    created_at: "02/06/2025",
                    updated_at: "02/06/2025",
                    finished_at: "02/06/2025"
                },
                todo_request_schema: {
                    title: "Wash the dishes",
                    description: "I've to whash the dishes before at 6:00 pm."
                }
            },
            movie: {
                movie_endpoints: {
                    "Get all movies": "GET api/movie/all",
                    "Get movie by id": "GET api/movie/{id}",
                    "Create a movie": "POST api/movie/create",
                    "Update movie": "PUT api/movie/update/{id}",
                    "Delete movie": "DELETE api/movie/delete/{id}"
                },
                movie_response_schema: {
                    id: "1",
                    title: "The Matrix",
                    description: "A movie that explore the fictica live.",
                    rating: "8.0",
                    created_at: "02/06/2025",
                    updated_at: "02/06/2025",
                    finished_at: "02/06/2025"
                },
                movie_request_schema: {
                    title: "The Matrix",
                    description: "A movie that explore the fictica live.",
                    rating: "8.0"
                }
            }
        }
    })
})

app.listen(port, ()=> {
    console.log(`Server listening in port ${port}`);
})

export default app