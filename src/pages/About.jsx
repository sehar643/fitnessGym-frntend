import React from 'react'
import '../style/allstyle.css'
import img1 from '../img/page2_pic1.jpg'
import img2 from '../img/page2_pic2.jpg'
import img3 from '../img/page2_pic3.jpg'
import img4 from '../img/page2_pic4.jpg'
import img5 from '../img/page2_pic5.jpg'
import icon1 from '../img/follow_icon6.png'
import icon2 from '../img/follow_icon7.png'
import icon3 from '../img/follow_icon8.png'
import icon4 from '../img/follow_icon9.png'
import icon5 from '../img/follow_icon10.png'

const About = () => {
    return (
        <div>
            <div className="global indent">
                {/*content*/}
                <div className="who-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <h4>About Us</h4>
                                <div className="thumb-pad4">
                                    <div className="thumbnail">
                                        <figure><img src={img1} alt /></figure>
                                        <div className="caption">
                                            <p>Tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.</p>
                                            <a href="#" className="btn-default btn2">more info</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <h4>Our Advantages</h4>
                                <ul className="list1">
                                    <li>
                                        <div className="badge">01</div>
                                        <div className="extra-wrap">
                                            <a href="#">Praesent vestibulum molestie</a>
                                            <p>Fusce suscipit varius mi. Cum sociis nato que penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="badge">02</div>
                                        <div className="extra-wrap">
                                            <a href="#">Donec accumsan malesuada</a>
                                            <p>Parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="badge">03</div>
                                        <div className="extra-wrap">
                                            <a href="#">Consectetuer adipiscing elit</a>
                                            <p>Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <h4>What We Offer</h4>
                                <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Mauris fermentum dictum magna.</p>
                                <p>Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.</p>
                                <ul className="list1-1">
                                    <li><a href="#">Nostrud exercitation ullamco laboris nisi ut aliquip</a></li>
                                    <li><a href="#">Duis aute irure dolor in reprehenderit in voluptate velit</a></li>
                                    <li><a href="#">Mauris fermentum dictum magna sed laoreet aliquam</a></li>
                                    <li><a href="#">Ut tellus dolor dapibus eget elementum vel cursus </a></li>
                                    <li><a href="#">Aenean auctor wisi et urnaliquam erat volutpat</a></li>
                                </ul>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. </p>
                                <p>Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Lorem ipsum dolor sit amet, consectetuer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimBox">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h4>Our Services</h4>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div className="thumb-pad1 maxheight2">
                                            <div className="thumbnail">
                                                <figure><img src={img2} alt /></figure>
                                                <div className="caption">
                                                    <a href="#">Aenean auctor wisi et urna</a>
                                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div className="thumb-pad1 maxheight2">
                                            <div className="thumbnail">
                                                <figure><img src={img3} alt /></figure>
                                                <div className="caption">
                                                    <a href="#">Aenean nonummy hend</a>
                                                    <p>Montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida atcursus nec, luctus a, lorem. Maecenas tristique orci ac sem. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div className="thumb-pad1 maxheight2">
                                            <div className="thumbnail">
                                                <figure><img src={img4} alt /></figure>
                                                <div className="caption">
                                                    <a href="#">Lorem ipsum dolor sit</a>
                                                    <p>Fusce feugiat malesuada odio. Morbi nunc odio, gravida atcursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div className="thumb-pad1 maxheight2">
                                            <div className="thumbnail">
                                                <figure><img src={img5} alt /></figure>
                                                <div className="caption">
                                                    <a href="#">Donec sit amet eros</a>
                                                    <p>Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
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

export default About
