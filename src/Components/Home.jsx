import React, { Component, useState } from 'react';
import Nav from "./Nav";
import axios from 'axios';



// const Home = (props) => {

class Home extends Component {
  constructor() {
    super();

    this.state = {
      hosp: {},
      loading: false,

    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const response = await axios.get('http://localhost:8080/hospitalApp/hospital') // GET meth
    console.log(response.data);
    this.setState({
      loading: false,
      hosp: response.data
    })
    console.log(this.state.hosp)
  }

  render() {
    return (
      <div>
        <div>
          <Nav user1={this.props.user} />
        </div>
        {this.state.loading &&
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>}

        <div className="card text-body mb-3 w-98 h-100     m-4  bg-white">
          <div className="card-header"><h3 >{this.state.hosp.hospName}</h3></div>
          <div className="card-body">
            <h5 className="card-title">Available Beds :<b className="text-danger">{this.state.hosp.availableBeds}</b></h5>
            <h5 className="card-title">Total Beds :<b className="text-success"> {this.state.hosp.totalBeds}</b></h5>
            <p className="card-text">

            </p>
          </div>
        </div>


      </div >
    )

  }
}

export default Home;