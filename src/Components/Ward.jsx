import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';




class Ward extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wardlist: [],
            loading: false,
            modalIsOpen: false,
            doctorlist: [],
            wardtype: {},

        }
    }


    async componentDidMount() {
        this.setState({ loading: true });
        const response = await axios.get('http://localhost:8080/hospitalApp/ward/all') // GET meth
        console.log(response.data);
        this.setState({
            loading: false,
            wardlist: response.data
        })
        console.log(this.state.wardlist)

    }


    handlemodeview = (ward) => {
        const wardlist = this.wardlist;
        this.setState({
            modalIsOpen: true,
            doctorlist: ward.doctorsList,

            wardtype: ward.wardType,
        })


        console.log(ward);
    }

    handleClose = () => {
        console.log("close")



        this.setState({
            modalIsOpen: false
        })


    }


    render() {
        const { wardlist, wardtype, doctorlist } = this.state;
        console.log(wardlist)

        return (
            <div>
                {/* <Nav user1={this.props.user} /> */}

                <div>
                    {this.state.loading &&
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>}
                    <div>




                        {this.state.doctorlist.length > 0 ?
                            <Modal show={this.state.modalIsOpen} onHide={this.handleClose}>
                                <h4 className="mx-5">WARD :<b className="text-primary text-uppercase font-weight-bold">{wardtype}</b></h4>

                                <Modal.Header id="modal1" closeButton>
                                    <Modal.Title >
                                        <table className="table table-striped " >
                                            <thead>
                                                <tr >
                                                    <td ><b className="mx-2">First</b></td>
                                                    <td ><b className="mx-2">Last</b></td>
                                                    <td ><b className="mx-2">Specialization</b></td>

                                                    <td ><b className="mx-2">Available</b></td>

                                                    <td ><b className="mx-2">Mobile</b></td>

                                                </tr>
                                            </thead>


                                            <tbody>
                                                {this.state.doctorlist.map((doctor, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td ><p className="fontweight mx-2">{doctor.fName}</p></td>
                                                            <td><p className="fontweight mx-2">{doctor.lName}</p></td>
                                                            <td><p className="fontweight mx-2">{doctor.specialization}</p></td>
                                                            <td><p className="fontweight mx-2">{doctor.isAvailable.toString()}</p></td>
                                                            <td><p className="fontweight mx-2">{doctor.mobileNum}</p></td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>
                                    </Modal.Title>
                                </Modal.Header>
                            </Modal> : <div >

                                <Modal show={this.state.modalIsOpen} onHide={this.handleClose}>

                                    <Modal.Header id="modal1" closeButton>
                                        <Modal.Title  >
                                            <div className="mx-3"><p className="textdata text-align-center">No Data Available</p></div>
                                        </Modal.Title></Modal.Header>
                                </Modal></div>}
                        <div className="row g-3">
                            {wardlist.map((ward, i) => {

                                return (

                                    <div className="mx-2" key={i}>
                                        <div className="card m-4  " >
                                            <div class="card-body mx-2">
                                                <div className="row">
                                                    <h5 className="card-title mx-4">{ward.wardType}</h5>

                                                    <div>
                                                        <button type="button" onClick={() => this.handlemodeview(ward)}
                                                            className="btn btn-primary button1 pt-1  d-flex flex-row-reverse"

                                                        >view</button>
                                                    </div>
                                                    <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">{wardlist.WardId}</h5>



                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="card-text">Available Beds:<b className="text-danger">{ward.availableBeds}</b></p>
                                                <p class="card-text">Total Beds :<b className="text-success">{ward.totalBeds}</b></p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                            }
                        </div>




                    </div>


                </div>

            </div >


        )
    }

}

export default Ward;