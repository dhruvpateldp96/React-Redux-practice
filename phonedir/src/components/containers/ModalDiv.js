import React from 'react'
import Form from './Form'

const ModalDiv = ({closeHandler}) => {
    return (
        <div class="container" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeHandler}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <Form/>
            </div>
            {/* <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeHandler}>Close</button>
            </div> */}
            </div>
        </div>
        </div>
    )
}

export default ModalDiv
