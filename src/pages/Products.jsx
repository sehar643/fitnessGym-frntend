import React from 'react'
import '../style/allstyle.css'
import img1 from '../img/page3_pic1.jpg'
import img2 from '../img/page3_pic2.jpg'
import img3 from '../img/page3_pic3.jpg'
import img4 from '../img/page3_pic4.jpg'
import img5 from '../img/page3_pic5.jpg'
import img6 from '../img/page3_pic6.jpg'
import icon1 from '../img/follow_icon6.png'
import icon2 from '../img/follow_icon7.png'
import icon3 from '../img/follow_icon8.png'
import icon4 from '../img/follow_icon9.png'
import icon5 from '../img/follow_icon10.png'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <div className="global indent">
        {/*content*/}
        <div className="container">
          <h2>Our Top Programs</h2> <br/>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="thumb-pad2">
                <div className="thumbnail">
                  <figure><img src={img1} alt /></figure>
                  <div className="caption maxheight2">
                    <p className="title">Boot Camp Fitness</p>
                    <p>Tempor incididunt t consectetur adipisicing elit. Reiciendis, veniam? ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Link to="/users"><button className='book-btn'>Book Now</button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="thumb-pad2">
                <div className="thumbnail">
                  <figure><img src={img2} alt /></figure>
                  <div className="caption maxheight2">
                    <p className="title">Weight Loss Program</p>
                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup tate velit esse. Mauris fermentum.</p>
                    <Link to="/users"><button className='book-btn'>Book Now</button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="thumb-pad2">
                <div className="thumbnail">
                  <figure><img src={img3} alt /></figure>
                  <div className="caption maxheight2">
                    <p className="title">Nutrition Guideline</p>
                    <p>Laboris nisi ut aliquip ex ea commodo conse quat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Mauris fermentum dictum magna. Sed laoreet aliquam leo.</p>
                    <Link to="/users"><button className='book-btn'>Book Now</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="proposition-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-12 col-sm-12 col-lg-offset-1">
                <p className="title">special proposition</p>
                <p>Labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. </p>
                <a href="#" className="btn-default btn3">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="group-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <h2>Group Dynamic Training Programs</h2> <br/><br/>
                <div className="thumb-pad5">
                  <div className="thumbnail">
                    <figure><img src={img4} alt /></figure>
                    <div className="caption">
                      <p className="title">Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum.</p>
                      <p>Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. </p>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermen tum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. </p>
                    </div>
                  </div>
                </div>
                <div className="thumb-pad5">
                  <div className="thumbnail">
                    <figure><img src={img5} alt /></figure>
                    <div className="caption">
                      <p className="title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus.</p>
                      <p>Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. </p>
                      <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <h2>Private Training</h2> <br/><br/>
                <div className="thumb-pad4">
                  <div className="thumbnail">
                    <figure><img src={img6} alt /></figure>
                    <div className="caption">
                      <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
                      <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus.</p>
                      <a href="#" className="btn-default btn2">more info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 tools-box">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="maxheight">
                    <h3>Telephone</h3>
                    <p>+1 800 603 6035</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="maxheight">
                    <h3>E-Mail Us</h3>
                    <p><a href="#">mail@demolink.org</a></p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="maxheight">
                    <h3>Follow Us</h3>
                    <ul className="follow_icon indent">
                      <li><a href="#"><img src={icon1} alt /></a></li>
                      <li><a href="#"><img src={icon2} alt /></a></li>
                      <li><a href="#"><img src={icon3} alt /></a></li>
                      <li><a href="#"><img src={icon4} alt /></a></li>
                      <li><a href="#"><img src={icon5} alt /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="indent maxheight">
                    <h3>Address</h3>
                    <p>9870 St Vincent Place,Glasgow, DC 45 Fr 45.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products
