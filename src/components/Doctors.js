import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from '../styles/Doctors.module.css';
import { connect } from 'react-redux';

const DoctorsList = ({ doctors }) => {

    const doctorsList = doctors.map(doctor => (
        <div key={doctor.id}>
            <Link to={`/doctors/${doctor.id}`} className={classes.Doctors}>
                <div className="d-flex flex-column align-items-center">
                    <img src={doctor.image} alt={doctor.name} className={`rounded-circle ${classes.img}`} />
                    <h5 className={`text-dark p-4 ${classes.border}`}>{doctor.name}</h5>
                    <p className="text-secondary mt-3">
                        <strong>Specialty:&nbsp;</strong>
                        {doctor.specialty}
                    </p>
                    <p className="text-secondary mt-3">
                        <strong>Education:&nbsp;</strong>
                        {doctor.education}
                    </p>
                </div>
            </Link>
        </div>
    ));
    return (
        <div className="container text-center">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                className=""
                containerClass="container"
                dotListClass=""
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 3,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                }}
                sliderClass=""
                slidesToSlide={1}
            >
                {doctorsList}
            </Carousel>
        </div>
    );
};

const mapStateToProps = state => {
    return { doctors: state.doctors }
}

export default connect(mapStateToProps)(DoctorsList);

