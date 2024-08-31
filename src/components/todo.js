import React,{useState} from 'react'
import '../App.css'

const ToDo =() => {

    const [inputValue,setInputValue] = useState('')
    const [todos,setTodos] = useState([])
    const [editMode,setEditMode] = useState(false)
    const [editValue,setEditValue] = useState('')
    const [editId,setEditId] = useState(null)

    const addTodo = () => {
        if(inputValue.trim()!==''){
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setTodos([...todos,newTodo])
            setInputValue('');
        }
    }

    const deleteTodo = (id) => {
        const updateTodos = todos.filter((todo)=>todo.id!==id);
        setTodos(updateTodos)
    }

    const editTodo = (id,text) => {
        setEditMode(true)
        setEditId(id)
        setEditValue(text)
    }

    const updateToDo=()=>{
        const updateTodos = todos.map((todo)=>{
            if(todo.id===editId){
                return{...todo,text:editValue}
            }
            return todo;
        })
        setTodos(updateTodos)
        setEditMode(false)
        setEditId(null)
        setEditValue('')
    }

    return(
        <div className='main'>
            <div className="content">
                <h2>ToDo</h2>                
                
                    Description:&nbsp;&nbsp;
                    <input type="text" 
                    id="desc" value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)} required/><br/>

                    {
                        editMode ? (
                            <div>
                                <input type="text"
                                value={editValue}
                                onChange={(e)=>setEditValue(e.target.value)}/>
                                <button className="btn btn-primary" onClick={updateToDo}>Update</button>
                            </div>
                        ):(
                            <button className='btn btn-primary' onClick={addTodo}>Add</button>
                        )
                    }

                    {/* <button className='btn btn-primary' onClick={addTodo}>Add ToDo</button> */}

                <ul>
                    {
                        todos.map((todo)=>{
                            return(
                                <li key={todo.id}>
                                    {todo.text}&nbsp;
                                    <button className='btn btn-danger' onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;
                                    <button className='btn btn-info' onClick={()=>editTodo(todo.id,todo.text)}>Edit</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDo