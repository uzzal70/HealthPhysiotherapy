import { Image } from 'react-bootstrap';
import './AboutUs.css';
const AboutUs = () =>
{
    return (
        <div className="mt-5">
            <div className="container">
                <div className="about-bg py-5 my-5 text-info">
                    <h2>Welcome to </h2>
                    <h4>Physiotherapy Center</h4>
                </div>
                <div className="row p-0 m-0 d-flex">
                    <div className="col-xs-12 col-sm-6 m-auto">
                        <h3 className="text-bold text-secondary">Physiotherapy</h3>
                        <br />
                        <p>Physiotherapy is a profession associated with assessing, diagnosing and treating illness, disability, musculoskeletal pain and dysfunction. Here at The Physio Rooms, we aim to help each patient restore movement and function to maximise physical potential.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 bg-info p-2">
                        <Image src="https://fatiherim.com/physiotherapypro/assets/img/blog/5.jpg" alt="" className="img-fluid" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;