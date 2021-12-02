import { useState, useEffect } from "react";
import ReactDOM  from "react-dom";
import styles from '../styles/Modal.module.css'

export default function Modal({show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
        setIsBrowser(true);
    }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3>Create a Todo</h3>
                    <a href="#" onClick={handleClose}>
                        <button className={styles.btn_close}>x</button>
                    </a>
                </div>
                <div className={styles.body}>{children}</div>
            </div>
        </div>
    ) : null

    if(isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null
    }
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// // Make sure to bind modal to your appElement 
// Modal.setAppElement('#ModalAddTodo');

// export default function TodoList() {
//     let subtitle;
//     const [modalIsOpen, setIsOpen] = React.useState(false);
  
//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function afterOpenModal() {
//       // references are now sync'd and can be accessed.
//       subtitle.style.color = '#f00';
//     }
  
//     function closeModal() {
//       setIsOpen(false);
//     }
  
//     return (
//       <div id="ModalAddTodo">
//           <h1>TodoList</h1>
//         <button onClick={openModal}>Add a Todo</button>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//           <button onClick={closeModal}>close</button>
//           <div>Add a Todo</div>
//           <form>
//             <input />
//             <button>tab navigation</button>
//             <button>stays</button>
//             <button>inside</button>
//             <button>the modal</button>
//           </form>
//         </Modal>
//       </div>
//     );
// }
