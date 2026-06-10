import { useState } from 'react'
import './App.css'

interface todoDataInt {
  id: number;
  title: string;
}

function App() {
  const [tasks, setTask] = useState([
    {id: 1, title: "first time, wash the dishes"},
    {id: 2, title: "make a dinner"}
  ])

  const createTodo = (todoData: todoDataInt) =>{
    todoData.id = 3;
    todoData.title = "Break down";
  };

  const searchTodo = () => {};

  const updateTodo = () => {};

  const deleteTodo = () => {};

  return (
      <section className='flex flex-col gap-4 justify-center'>
        <h1>ToDo App</h1>
        <div className='flex flex-row gap-10 items-center m-4'>
            <input 
            className='border px-4 py-2 rounded-md w-86'
            type="text" placeholder='Search your or create your ToDo' id='todo' name='todo'/>
            <button className='p-2 rounded-md text-black bg-green-400 border-white'>Create Todo</button>
        </div>

        <article>
          <ol>
            {
              tasks && tasks.map(
                task => (
                <li key={task.id} className='text-slate-400'>{task.title} <button>delete</button></li>
              )
            )
            }
          </ol>
        </article>
      </section>
  )
}

export default App
