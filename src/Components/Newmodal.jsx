import React from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function Newmodal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                        <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                            Level 1: .col-sm-9
                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newmodal;