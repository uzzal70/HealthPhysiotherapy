import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css';

const Services = () =>
{
    const [services, setServices] = useState([]);
    useEffect(() =>
    {
        fetch('./PhysioService.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="service-banar py-5 col-sm-12">
                <h1>Top 6 Most Common <br /> Physiotherapy <br />Treatments You Should Know</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="service-container m-auto py-4">
                        {
                            services.map(service => <Service
                                key={services.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Services;