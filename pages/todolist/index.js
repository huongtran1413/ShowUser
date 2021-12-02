import { useState } from 'react'
import Modal from "../../components/Modal"
import styles from '../../styles/TodoList.module.css'

export default function todoList() {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div id="modal-root">
            <h1>To Do List</h1>
            <button onClick={() => setShowModal(true)} className= {styles.btnShowModal}>Add a new Todo</button>
            
            
            <Modal show={showModal} onClose={() => setShowModal(false)}>
            <form>
                <div className="form-row">
                    <div className="form-group col">
                        <label className={styles.modal_lable}>Todo</label>
                        <input name="nameTodo" type="text" className={styles.modal_input} autoComplete="nameTodo" required />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="form-group col">
                        <label className={styles.modal_lable}>Content</label>
                        <input name="nameTodo" type="text" className={styles.modal_input} autoComplete="nameTodo" required />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="form-group col">
                        <label className={styles.modal_lable}>Time</label>
                        <input name="nameTodo" type="text" className={styles.modal_input} autoComplete="nameTodo" required />
                        <div className="invalid-feedback"></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group-btn col">
                        <button type="submit" className="btn">Create</button>
                    </div>
                </div>      
            </form>
            </Modal>
        </div>
    )
}
