/* eslint-disable no-unused-vars */
import React from 'react'
import TextField from '@material-ui/core/TextField';

function ModalFgp() {
    return (
        <div>
            <div class="modal fade" id="fgp-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Student Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <label for="name" className='fgp-modal-label'>Name</label>
                                <input type='text' name='name' />
                            </div>
                            <div>
                                <label for="id-no" className='fgp-modal-label'>I.D. No.</label>
                                <input type='text' name='id-no' />

                            </div>
                            <div>
                                <label for="branch" className='fgp-modal-label'>Branch</label>
                                <input type='text' name='branch' />
                            </div>
                            <div className="footer">fooyterc 1</div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFgp
