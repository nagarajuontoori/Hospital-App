import React, { Component } from "react";
import axios from "axios";

import { withRouter } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import Nav from "./Nav";

class Doctors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorlist: [],
            loading: false,
            formvalue: [],

        }

    }



    handleview = (doctor) => {
        var id = doctor.doctorId;
        this.props.history.push({ pathname: `/Doctorform/${id}`, state: { detail: doctor } })

    }








    async componentDidMount() {
        this.setState({ loading: true });
        const response = await axios.get('http://localhost:8080/hospitalApp/doctor/all') // GET meth
        console.log(response.data);
        this.setState({
            loading: false,
            doctorlist: response.data
        })
    }


    handledelete = (doctorId) => {

        axios.delete('http://localhost:8080/hospitalApp/doctor/' + doctorId)
            .then((response) => {

                if (response.status === 200) {

                    this.setState({ doctorlist: [] })
                    this.componentDidMount()
                    alert('delete successful')
                }
                else {
                    alert('delete unsuccessfull')
                }
            }

            )
    }

    // this.setState({
    //     status: 'Delete successful'
    // });
    // console.log(response);






    // const index = this.state.doctorlist.indexOf(doctor);
    // const doctor1 = doctorlist.slice(0, index)
    // const doctor2 = doctorlist.slice(index + 1);
    // const newArr = [...doctor1, ...doctor2]
    // this.setState({
    //     doctorlist: newArr
    // })


    render() {
        console.log(this.state.doctorlist)
        const { doctorlist } = this.state;
        return (
            <div>
                <Nav />

                <div>

                    {this.state.loading &&
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>}
                </div>
                <div className="doc-button">
                    <Link to="/Doctorform" type="button" className="btn btn-primary mx-5 mt-1 ">Add Doctor</Link>
                </div>
                <div className="doctorlist">
                    <table className="table table-striped" >

                        <thead>
                            <tr>
                                <td ><b>view</b></td>
                                <td ><b>First</b></td>
                                <td ><b>Last</b></td>
                                <td ><b>Specialization</b></td>

                                <td ><b>Available</b></td>

                                <td ><b>Mobile</b></td>

                            </tr>
                        </thead>

                        <tbody>

                            {doctorlist.map((doctor, index) => {
                                return (
                                    <tr key={index}>

                                        <td onClick={() => this.handleview(doctor)}><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right text-primary" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                        </svg></td>

                                        <td>{doctor.fName}</td>
                                        <td>{doctor.lName}</td>
                                        <td>{doctor.specialization}</td>
                                        <td>{doctor.isAvailable.toString()}</td>
                                        <td>{doctor.mobileNum}</td>
                                        <td><svg onClick={() => this.handledelete(doctor.doctorId)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-danger bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg></td>
                                    </tr>

                                )
                            })}




                        </tbody>
                    </table>
                </div >
            </div >
        );
    }
}


export default withRouter(Doctors);