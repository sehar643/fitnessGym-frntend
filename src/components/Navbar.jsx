import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-2'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <marquee>
                            <div className='d-flex'>
                                <p className='text-black'>
                                    <span><i className="fa-solid fa-location-dot"></i></span> Mustafa Town Lahore
                                </p> &ensp; &ensp;  &ensp;  &ensp;
                                <p className='text-black'>
                                    <span><i className="fa-solid fa-phone"></i></span> +92 320 11223344
                                </p>
                                &ensp; &ensp;  &ensp;  &ensp;
                                <p className='text-black'>
                                    <span><i className="fa-solid fa-envelope"></i></span> seharuzair9@gmail.com
                                </p>
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
