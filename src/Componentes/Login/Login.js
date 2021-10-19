import React from 'react';
import './login.css';
import
{
    BrowserRouter as
        Link
} from "react-router-dom";

const Login = () =>
{
    return (
        <div>
            <div className="about-bg py-5 text-info">
                <h1>This is registration </h1>
            </div>
            <div className="container">
                <div className="col-xs-4 col-lg-4 m-auto mt-5 p-3 bg-info rounded-3">
                    <form onSubmit="">
                        <input className='w-100 p-1 mb-2' type="email" name="" id="" placeholder="Your Email" /><br />
                        <input className='w-100 p-1 mb-2' type="Password" name="" id="" placeholder="Password" /><br />
                        <input className='w-50 rounded-pill mb-2' type="submit" value="Submit" />
                    </form>
                    <hr />
                    <p><strong>New Pataiant to</strong> <Link to="/register"> Create account</Link> </p>
                    <button className="btn-regular rounded-pill"> Google Sign In</button>
                    <hr />
                </div>
            </div>

        </div>
    );
};

export default Login;