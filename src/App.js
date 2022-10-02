import { useState } from 'react'
//import './App.css';

import Header from './components/Header'
import Tasks from './components/Task';
import AddTask from './components/AddTask';

const App = ()=> {
  const [showAddTask, setShowAddTask] = useState(true)
const [tasks, setTasks] = useState([
  {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
  ] 
)
const addTask = (task) =>{
  console.log(task)
  const id= tasks.length +1
  const newTask ={id, ...task}
  setTasks([...tasks, newTask])

}
const deleteTask =(id) =>{
  console.log('deleting ...', id)
  setTasks(tasks.filter((task) =>task.id !==id))
}
const toggleCompleted = (id)=>{
  console.log(id);
  setTasks(tasks.map((task) => task.id === id ?
  {...task, completed:!task.completed} : task))
}

  return (
    <div className="App">
          <Header onAdd={()=> setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          />
          {showAddTask && 
          <AddTask onAdd={addTask}/>}
         {tasks.length >0 ?(
         
         <Tasks tasks={tasks} 
          onDelete={deleteTask}
          onToggle ={toggleCompleted}/>
         ) : ('no task')}
    </div>
  );
}

export default App;
