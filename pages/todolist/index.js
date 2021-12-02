import { useState } from 'react'
import Modal from "../../components/Modal"
import styles from '../../styles/TodoList.module.css'

export default function TodoList() {
    const [showModal, setShowModal] = useState(false);
    const [userInputname, setUserInputName] = useState('');
    const [userInputcontent, setUserInputContent] = useState('');
    const [userInputTime, setUserInputTime] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleChangeName = (e) => {
        e.preventDefault();
        setUserInputName(e.target.value)
        
    } 
    const handleChangeContent = (e) => {
        e.preventDefault();
        setUserInputContent(e.target.value)        
    } 
    const handleChangeTime = (e) => {
        e.preventDefault();
        setUserInputTime(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userInputname && userInputcontent && userInputTime) {
            const todoItem = [userInputname, userInputcontent, userInputTime]
            setTodoList(
                [ ...todoList, todoItem]
            )
            console.log(todoList)
            setShowModal(false)
        }
    }

    const handleDelete = (todo) => {
        const updateArray = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        setTodoList(updateArray)
    }

    return (
        <div id="modal-root">
            <div className="header_title">
                <h1>To Do List</h1>
                <button onClick={() => setShowModal(true)} className= {styles.btnShowModal}>Add a new Todo</button>
            </div>
                
            <Modal show={showModal} onClose={() => setShowModal(false)}>
            <form>
                <div className="form-row">
                    <div className="form-group col">
                        <label className={styles.modal_lable}>Todo</label>
                        <input name="nameTodo" type="text" onChange={handleChangeName}  className={styles.modal_input} autoComplete="nameTodo" required />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="form-group col">
                        <label className={styles.modal_lable}>Content</label>
                        <input name="Content" type="text" onChange={handleChangeContent} className={styles.modal_input} autoComplete="Content" required />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="form-group col">
                        <label className={styles.modal_lable}>Time</label>
                        <input name="Time" type="number" onChange={handleChangeTime} className={styles.modal_input} autoComplete="Time" required />
                        <div className="invalid-feedback"></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group-btn col">
                        <button type="submit" className="btn" onClick={ handleSubmit}>Create</button>
                    </div>
                </div>      
            </form>
            </Modal>
            <ul>
                {
                    todoList.length >=1 ? todoList.map((todo, index) => {
                        console.log(todo)
                        return <li key={index} className={styles.todoItem}><strong>Todo:</strong> {todo[0]} <span> | </span> <strong>Content:</strong> {todo[1]} <span> | </span> <strong>Time:</strong> { todo[2]} hour
                                <button className="btn" onClick={(e) => {
                                    e.preventDefault()
                                    handleDelete(todo)
                                }}>Delete</button>
                        </li>
                    }) : 'enter a todo item'
                }
            </ul>

        </div>
    )
}
