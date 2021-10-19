import React from 'react';
import './Services.css';

const Service = (props) =>
{
    const { picture, name, description, fee } = props.service;


    return (
        <div className="row">
            <div className="card shadow text-center pt-4 pb-3 mx-2 text-white">
                <img src={picture} alt="" className="m-auto" style={{ width: '100%', height: '200px', }} />
                <h3 className="text-black">{name}</h3>
                <h6 >Designation: {description}</h6>
                <h5>Fee: $ {fee}</h5>
                <button
                    className="btn btn-info m-auto w-50 fw-bold">
                    Details
                </button>
                <p>
                    <a href="www.facebook.com"><i className="fab fa-facebook text-primary"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-github"></i></a>
                    <a href="www.facebook.com"><i className="fab fa-whatsapp text-info"></i></a>
                </p>
            </div>

        </div>

    );
};

export default Service;