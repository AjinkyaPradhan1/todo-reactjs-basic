import React,{useState} from 'react'
import '../App.css'

const ToDo =() => {

    const [inputValue,setInputValue] = useState('')
    const [todos,setTodos] = useState([])

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

    return(
        <div className='main'>
            <div className="content">
                <h2>ToDo</h2>                
                
                    Description:&nbsp;&nbsp;
                    <input type="text" 
                    id="desc" value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)} required/><br/>
                    <button className='btn btn-primary' onClick={addTodo}>Add ToDo</button>

                <ul>
                    {
                        todos.map((todo)=>{
                            return(
                                <li key={todo.id}>
                                    {todo.text}&nbsp;
                                    <button className='btn btn-danger' onClick={()=>deleteTodo(todo.id)}>Delete</button>
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