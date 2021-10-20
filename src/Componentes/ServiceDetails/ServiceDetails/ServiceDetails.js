import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../../Services/Services.css'
import Service from '../../Services/Service';

const ServiceDetails = () =>
{

    const [services, setServices] = useState([]);
    useEffect(() =>
    {
        fetch('/PhysioService.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    const { servicedetailsId } = useParams();
    return (
        <div className="container">
            <h1 className="py-4 bg-dark text-info">Service Details {servicedetailsId}</h1>
            <div className="my-5">
                <div className=" m-auto">
                    <Row className="service-container m-auto py-4 text-white">
                        {
                            services.filter(servicedetail => servicedetail.id == servicedetailsId).map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }

                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;