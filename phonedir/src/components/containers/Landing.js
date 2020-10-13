import React from 'react'
import PhoneList from './PhoneList'
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from "react-redux"
import {changeModalState} from "../../actions/searchActions"
import ModalDiv from './ModalDiv';

const Landing = () => {
    const modalState = useSelector(state => state.phones.modalState)
    const dispatch = useDispatch()
    const contactList = useSelector(state => state.phones.contacts)
    
    const closeHandler = () => {
        dispatch(changeModalState())
    }
    return (
        <div>
            {modalState && <Modal
                open={modalState}
                onClose={closeHandler}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
               <ModalDiv closeHandler={closeHandler}/>        
            </Modal >}
 
            <PhoneList contactList={contactList}/>
        </div>
    )
}

export default Landing
