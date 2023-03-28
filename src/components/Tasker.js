import React , {useEffect ,useState} from 'react';
import Card from './Card';
import Createtask from './Createtask';

export default function Tasker() {
  const [modal, setmodal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const toggle =()=>{
    setmodal(!modal); 
  } 
  const deleteTask= (index)=>{
    let tempList = taskList
    tempList.slice(index ,1)
    localStorage.getItem("taskLlist",JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
   }

  useEffect(() => {
  let arr = localStorage.getItem("taskList")
  if(arr){
    let obj = JSON.parse(arr)
    setTaskList(obj)
  }
  },[])
  

  return (
    <>
    <div className='header text-center'>
   <h3>Tasker</h3>
   <button className='btn btn-primary mt-2' onClick={()=>setmodal(true)}>Create Task</button>
    </div>
    <div className="task-container">
       {taskList.map((obj , index)=> <Card taskObj = {obj} index = {index} deleteTask={deleteTask}/>)}
    </div>
    <Createtask toggle={toggle} modal={modal} setmodal={setmodal} setTaskList={setTaskList} taskList={taskList}/>
    
    </>
  )
}
