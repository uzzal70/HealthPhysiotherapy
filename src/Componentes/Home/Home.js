import React from 'react';
import './Home.css';
const Home = () =>
{
    return (
        <div >
            <div className="banar container-fluid">
                <div className="m-auto pt-5">
                    <h2 className="text-info m-auto text-uppercase">Physiotherapy Now <br /></h2>
                    <h2 className="text-white m-auto text-uppercase">Do Not Wait <br /></h2>
                    <h1> <span className="text-color text-uppercase">There is a Solution</span></h1>
                </div>
            </div>

            <div className="container my-5">
                <div className="row p-0 m-0 d-flex">
                    <div className="col-xs-12 col-sm-6 m-auto">
                        <h1 className="text-start">EXPART TREATMENT</h1>
                        <br />
                        <p className="text-start">Because ischemic and hemorrhagic strokes have different causes and effects on the body, both require different treatments.
                            <br />
                            <br />
                            Rapid diagnosis is important for reducing brain damage and enabling the doctor to treat the stroke using a suitable method for the type.
                            <br />
                            <br />
                            The sections below cover the treatment options for ischemic stroke and hemorrhagic stroke, as well as some general rehabilitation tips for both types.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 m-auto">
                        <img src="https://fatiherim.com/physiotherapypro/assets/img/blog/2.jpg" className="img-fluid" alt="" />
                    </div>
                </div >
                <br /><br />
                <div className="row p-0 m-0 d-flex">

                    <div className="col-xs-12 col-sm-6 m-auto">
                        <img src="https://fatiherim.com/physiotherapypro/assets/img/blog/1.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-6 m-auto">
                        <h1 className="text-start">Benefits of physical therapy</h1>
                        <br />
                        <p className="text-start">
                            Depending on the reason for treatment, the benefits of physical therapy include:
                            <br />
                            <br />
                            <li>Pain management with reduced need for opioids
                            </li>
                            <li>
                                Avoiding surgery
                            </li>
                            <li>Improved mobility and movement</li>
                            <li> Recovery from injury or trauma</li>
                            <li>
                                Recovery from stroke or paralysis
                            </li>
                            <li>
                                Fall prevention
                            </li>
                            <li>
                                Improved balance
                            </li>
                            <br />
                            Management of age-related medical problem.</p>
                    </div>
                </div >
            </div>
        </div >
    );
};

export default Home;