import React from 'react'
import img1 from '../img/page4_pic1.jpg'
import img2 from '../img/page4_pic2.jpg'
import img3 from '../img/page4_pic3.jpg'
import img4 from '../img/page4_pic4.jpg'
import img5 from '../img/page4_pic5.jpg'
import img6 from '../img/page4_pic6.jpg'
import img7 from '../img/page4_pic7.jpg'
import img8 from '../img/page4_pic8.jpg'
import img9 from '../img/page4_pic9.jpg'
import img10 from '../img/page4_pic10.jpg'
import icon1 from '../img/follow_icon6.png'
import icon2 from '../img/follow_icon7.png'
import icon3 from '../img/follow_icon8.png'
import icon4 from '../img/follow_icon9.png'
import icon5 from '../img/follow_icon10.png'

const Gallery = () => {
    return (
        <div>
            <div className="global indent">
                {/*content*/}
                <div className="gallery-box">
                    <div className="container">
                        <h4>Our Gallery</h4>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img1.jpg"><em /><img src={img1} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Maecenas tristique orci</a>
                                            <p>Natoque penatibus et magnis dis parturie nt montes, nascetur ridiculus mus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img2.jpg"><em /><img src={img2} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Sed laoreet aliquam leo</a>
                                            <p>Fusce feugiat malesuada odio. Morbi nunc odio, gravida atcursus nec, luctus a.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img3.jpg"><em /><img src={img3} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Integer rutrum ante eu lacus</a>
                                            <p>Gravida atcursus nec, luctus a, lorem. Maecenas tristique orci ac sem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img4.jpg"><em /><img src={img4} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Cum sociis natoque penatib</a>
                                            <p>Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img5.jpg"><em /><img src={img5} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Cum sociis natoque penatib</a>
                                            <p>Magnis dis parturie nt montes, nascetur ridiculus mus. Nulla dui fusce feugia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img6.jpg"><em /><img src={img6} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Lorem ipsum dolor sit amet</a>
                                            <p>Morbi nunc odio, gravida atcursus nec, luctus a, lorem. Maecenas tristique.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img7.jpg"><em /><img src={img7} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Aenean nonummy hendrerit</a>
                                            <p>Duis ultricies pharetra magna. Donec accumsan malesuada orci. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img8.jpg"><em /><img src={img8} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Fusce suscipit varius mi</a>
                                            <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img9.jpg"><em /><img src={img9} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Donec accumsan malesuada</a>
                                            <p>Morbi nunc odio, gravida atcursus nec, luctus a, lorem. Maecenas tristique.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img10.jpg"><em /><img src={img10} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Praesent vestibulum moles</a>
                                            <p>Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img10.jpg"><em /><img src={img1} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Praesent vestibulum moles</a>
                                            <p>Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 pad1Box">
                                <div className="thumb-pad1 indent">
                                    <div className="thumbnail">
                                        <figure><a href="img/img10.jpg"><em /><img src={img2} alt /></a></figure>
                                        <div className="caption">
                                            <a href="#">Praesent vestibulum moles</a>
                                            <p>Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
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
                                        <p>+92 320 7699 527</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <div className="maxheight">
                                        <h3>E-Mail Us</h3>
                                        <p><a href="#">seharuzair9@gmail.com</a></p>
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
                                        <p>Mustafa Town Lahore, Pakistan</p>
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

export default Gallery
