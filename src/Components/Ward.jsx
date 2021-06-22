import React, { Component } from 'react';
import Nav from './Nav';

import axios from 'axios';


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


    // handleview = (wardType) => {
    //     let { wardlist } = this.state;
    //     console.log('view', wardlist[wardType])
    // }


    render() {

        const { wardlist, index } = this.state
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
                        {wardlist.map((item, key) => {

                            return (

                                <div class="card m-4">
                                    <div class="card-body mx-2">
                                        <div className="row">
                                            <h5 class="card-title mx-4">{item.wardType}</h5>

                                            <button type="button" onClick={(wardType) => this.handleview(wardType)} className="btn btn-primary button1 pt-1  d-flex flex-row-reverse">view</button>
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