import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const TodoSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String,
        created_at: Date,
        updated_at: Date,
        finished_at: Date
    }
)


export const Todo = mongoose.model('todo', TodoSchema)