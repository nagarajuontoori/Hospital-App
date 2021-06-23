import React, { Component } from 'react';
import Nav from './Nav';

import axios from 'axios';
import Doctors from './Doctors';


class Ward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wardlist: [],
            loading: false,
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


    handlemodeview = () => {
        const { wardlist } = this.state;
        const index = this.state.wardlist.indexOf(wardlist.wardType);
        console.log('view', wardlist[wardlist.wardType]);
        // console.log(index)
    }


    render() {

        const { wardlist } = this.state
        return (
            <div>
                <Nav user2={this.props.user} />

                <div>
                    {this.state.loading &&
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>}

                    <div className="row g-3">
                        {wardlist.map((item, index) => {

                            return (

                                <div className="card m-4">
                                    <div class="card-body mx-2">
                                        <div className="row">
                                            <h5 key={index} className="card-title mx-4">{item.wardType}</h5>

                                            <button type="button" onClick={() => this.handlemodeview()} className="btn btn-primary button1 pt-1  d-flex flex-row-reverse">view</button>
                                        </div>
                                        <p class="card-text">Available Beds:<b className="text-danger">{item.availableBeds}</b></p>
                                        <p class="card-text">Total Beds :<b className="text-success">{item.totalBeds}</b></p>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>

                </div>

            </div >
        )
    }

}

export default Ward;