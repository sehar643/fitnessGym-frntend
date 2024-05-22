import React from 'react'
import '../style/allstyle.css'
import '../style/homeForm.css'
import img1 from '../img/quote1.png'
import img2 from '../img/page1_pic5.jpg'
import img3 from '../img/page1_pic6.jpg'
import img4 from '../img/page1_pic7.jpg'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/slider1.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/slider2.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/slider3.jpeg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* ----------Section two---------- */}

            <div className="center-box mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="thumb-pad-pic">
                                <div className="caption caption-img-1">
                                    {/* <img src="./images/page1_pic1.jpg" alt="" /> */}
                                    <div className="caption-info">
                                        <p className="title">Lorem Ipsum</p>
                                        <p className="description">by Mark Johnson</p>
                                    </div>
                                </div>
                            </div>
                            <p className="title">Weigh Loss</p>
                            <p>odio dignissimos ducimus qui blan <br />ditiis praesentium voluptatum <br />deleniti atque corrupti.</p>
                            <a href="#" className="btn-default btn1"><span /></a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="thumb-pad-pic">
                                <div className="caption caption-img-2">
                                    <div className="caption-info">
                                        <p className="title">Lorem Ipsum</p>
                                        <p className="description">by Bradley Grosh</p>
                                    </div>
                                </div>
                            </div>
                            <p className="title">Trainings</p>
                            <p>odio dignissimos ducimus qui blan <br />ditiis praesentium voluptatum <br />deleniti atque corrupti.</p>
                            <a href="#" className="btn-default btn1"><span /></a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="thumb-pad-pic">
                                <div className="caption caption-img-3">
                                    <div className="caption-info">
                                        <p className="title">Lorem Ipsum</p>
                                        <p className="description">by Patrick Pool</p>
                                    </div>
                                </div>
                            </div>
                            <p className="title">Exercises </p>
                            <p>odio dignissimos ducimus qui blan <br />ditiis praesentium voluptatum <br />deleniti atque corrupti.</p>
                            <a href="#" className="btn-default btn1"><span /></a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="thumb-pad-pic">
                                <div className="caption caption-img-4">
                                    <div className="caption-info">
                                        <p className="title">Lorem Ipsum</p>
                                        <p className="description">by John McCoist</p>
                                    </div>
                                </div>
                            </div>
                            <p className="title">Results</p>
                            <p>odio dignissimos ducimus qui blan <br />ditiis praesentium voluptatum <br />deleniti atque corrupti.</p>
                            <a href="#" className="btn-default btn1"><span /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------Section Three--------------- */}

            <div className="welcome-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <p className="title">Get With the Program</p>
                            <div className="badge"><img src={img1} alt /></div>
                            <div className="extra-wrap">
                                <p className="description">Nam libero tempore, cum soluta nobis est eligendi ex eades commodi consequaturoptio cumque psam voluptatemquia.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimosede ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molesas exceptur sint occaecati cupiditate non providentsimilique sunt in culpa qui.</p>
                            </div>
                            <a href="#" className="btn-default btn2">more info</a>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 col-lg-offset-1 bookingForm mini mt-5 ">
        <h2>Booking</h2>
        <form id="bookingForm">
        <div className="fl1">
            <div className="tmInput">
              <input name="text" placeholder="Choose Program" type="text" data-constraints="@NotEmpty @Required @Email" />
            </div> 
          </div>
          <div className="clear" />
          <div className="fl1">
            <div className="tmInput">
              <input name="date" type="date" data-constraints="@NotEmpty @Required @Email" />
            </div>     
          </div>
          <div className="clear" />
          <div className="fl1">
            <div className="tmInput">
              <input name="text" placeholder="Number of Persons" type="text" data-constraints="@NotEmpty @Required @Email" />
            </div>     
          </div>
          <div className="clear" />
          <div className="fl1">
            <div className="tmInput">
              <input name="Email" placeholder="Email" type="text" data-constraints="@NotEmpty @Required @Email" />
            </div>     
          </div>
          <div className="fl1">
            <div className="tmInput">
              <input name="Phone" placeholder="Phone" type="text" data-constraints="@NotEmpty @Required @Phone" />
            </div>     
          </div> <br/>
          <a href="#" className="btn-default btn3" data-type="submit">Book Now!</a>
        </form>
      </div>
                        {/* <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='miniform'>
                                <h2 className='miniform-heading'>Booking</h2>
                                <input className='miniform-input' type="text" placeholder='Chose your Activity' /> <br />
                                <input className='miniform-input' type='date' /> <br />
                                <input className='miniform-input' type='text' placeholder='Number of Persons' /> <br />
                                <input className='miniform-input' type='email' placeholder='Email' /> <br />
                                <input className='miniform-input' type='phone' placeholder='Phone' /> <br /> <br />
                                <button className='miniform-btn'>Book Now!</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* --------section four---------*/}

            <div className="container">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 fitness-box">
                            <p className="title">Improve Your Fitness and Health</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dolore eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. </p>
                            <a href="#" className="btn-default btn2">more info</a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-lg-offset-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pad1Box">
                                    <div className="thumb-pad1">
                                        <div className="thumbnail">
                                            <figure><img src={img2} alt /></figure>
                                            <div className="caption">
                                                <a href="#">Maria Smith</a>
                                                <p>voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia conseur magni dolores eos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pad1Box">
                                    <div className="thumb-pad1">
                                        <div className="thumbnail">
                                            <figure><img src={img3} alt /></figure>
                                            <div className="caption">
                                                <a href="#">Sergio Sawyer</a>
                                                <p>voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia conseur magni dolores eos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pad1Box">
                                    <div className="thumb-pad1">
                                        <div className="thumbnail">
                                            <figure><img src={img4} alt /></figure>
                                            <div className="caption">
                                                <a href="#">Anna Brown</a>
                                                <p>voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia conseur magni dolores eos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------section five------------- */}

            <div className="map-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24214.807650104907!2d-73.94846048422478!3d40.65521573400813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1395650655094" style={{ border: 0 }} />
            </div>


        </div>
    )
}

export default Home
