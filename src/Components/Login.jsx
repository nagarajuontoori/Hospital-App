import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

// const useFormInput = intialvalue => {
//     const [value, setValue] = useState(intialvalue)

//     const handleChange = (e) => {
//         setValue(e.target.value);
//     }
//     return (
//         {
//             value,
//             onChange: handleChange
//         }

//     )


// }



const Login = (props) => {


    const [Loading, setLoading] = useState(false)
    // const username = useFormInput('');
    // const password = useFormInput('');
    const [error, setError] = useState(null);
    const [formValues, setFormValues] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,

        });
    }


    const handlesubmit = () => {
        setError(null);
        setLoading(true);

        const { username, password } = formValues;
        console.log(username)
        props.handlename(username);

        axios.post('http://localhost:8080/hospitalApp/welcome/login', {

            userName: username,
            password: password
        })
            .then(response => {
                if (response.data.message === "SUCCESS")
                    // props.history.push('/Home');
                    history.push('/Home');
                else
                    setError("Something went wrong. Please try again later.");
            }).catch(error => {

                setError("Something went wrong. Please try again later.");
            });
    }


    return (



        <div className="login-page  ">
            <div className="login  ">
                <div className="m-4 p-1">
                    <h4 className="justify-content-center">Login</h4>

                    <label><b>username</b></label><br />
                    <input
                        type="username"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        name="username"
                        onChange={(e) => handleChange(e)}
                    /><br />
                    <label><b>password</b></label><br />
                    <input type="password" onChange={(e) => handleChange(e)} name="password" className="form-control" placeholder="Password" aria-label="password" /><br />
                    <span className="text-danger">  {error && <p>the input entered is incorrect</p>}</span>
                    <button onClick={handlesubmit} type="button" className="  btn btn-primary btn-block">login</button>
                </div>
            </div>
        </div>


    )
}

export default Login;