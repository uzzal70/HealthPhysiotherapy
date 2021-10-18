// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Apointment.css';

// import { Image } from 'react-bootstrap';
// import { } from 'react-bootstrap';

const Apointment = () =>
{
    return (

        <div className="container">
            <div className="py-4 mt-5 px-3 m-auto bg">
                <h1>Make An Appointment</h1>
            </div>
            <div className="row m-0 p-0 py-5">
                <div className="col-xs-12 col-sm-6 form-border">
                    <img src="https://fatiherim.com/physiotherapypro/assets/img/blog/3.jpg" alt="" className="img-fluid" />
                </div>

                <div className="col-xs-12 col-sm-6 pt-5 pb-2 bg-secondary form-border">
                    <div className="form-group col-sm-12 col-xs-12 pb-2">
                        <input className="w-100 p-2 rounded" type="text" name="name" value="" placeholder="Your Name" required="" />
                    </div>
                    <div className="form-group col-sm-12 col-xs-12 pb-2">
                        <input className="w-100 p-2 rounded" type="email" name="email" value="" placeholder="Your Email" required="" />
                    </div>
                    <div className="form-group col-sm-12 col-xs-12 pb-2">
                        <select name="subject" className="w-100 rounded">
                            <option>-Subject to Discuss-</option>
                            <option>Personal Problems</option>
                            <option>Child Problems</option>
                            <option>Relationship Problems</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-12 col-xs-12 pb-2">
                        <input className=" w-100 rounded p-2" type="text" name="phone" value="" placeholder="Your Phone Number" required="" />
                    </div>
                    <div className="form-group col-sm-12 col-xs-12 pb-2">
                        <input className="w-100 rounded p-2 hasDatepicker" type="text" name="datepicker" id="datepicker" value="" placeholder="Available Date" required="" />
                    </div>
                    <div className="form-group padd-top-10 col-md-12 col-sm-12 col-xs-12">
                        <button type="submit" className="btn btn-info">Send Request</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Apointment;