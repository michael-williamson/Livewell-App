import React from 'react';
import ReactDOM from 'react-dom';
import history  from '../history';


//e.stopPropagation is preventing event bubbling

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={()=> history.push('/view-fish')} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Delete Fish</div>
                <div className="content">
                    Are you sure you want to delete this fish?
                </div>
                <div className="actions">
                    <button className="ui primary button" onClick={()=>props.deleteFish(props.id,props.googleId)} >Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#deleteModal')
    );
}

export default Modal;