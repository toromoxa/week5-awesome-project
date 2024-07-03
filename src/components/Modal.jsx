import './Modal.css';

function Modal({ ModalTitle, clickedCancel, clickedConfirm}) {
    return(
        <>
            <div className="modal">
                <p className="modal__title">{ ModalTitle }</p>
                <div className="modal__buttons">
                    <button className="btn btn__cancel" onClick={clickedCancel}>Cancel</button>
                    <button className="btn" onClick={clickedConfirm}>Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}

export default Modal;