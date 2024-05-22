import React from 'react'
import '../style/contactForm.css'
import icon1 from '../img/follow_icon6.png'
import icon2 from '../img/follow_icon7.png'
import icon3 from '../img/follow_icon8.png'
import icon4 from '../img/follow_icon9.png'
import icon5 from '../img/follow_icon10.png'

const Contact = () => {
  return (
    <div>
      <div className="global indent">
        <div className="container">
          <div className="map">
            <h4>Contact Us</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24214.807650104907!2d-73.94846048422478!3d40.65521573400813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1395650655094" style={{ border: 0 }} />
          </div>
        </div>
        <div className="formBox">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 form-box">
                <h4>Address</h4>
                <div className="info">
                  <h3 className="indent">8901 Marmora Road,<br />Glasgow, D04 89GR.</h3>
                  <p><span>Freephone:</span>+1 800 559 6580</p>
                  <p><span>Telephone:</span>+1 800 603 6035</p>
                  <p><span>FAX:</span>+1 800 889 9898</p>
                  <p><span>E-mail:</span><a href="#">mail@demolink.org</a></p>
                </div>
                <div className="info">
                  <h3 className="indent">9863 - 9867 Mill Road,<br />Cambridge, MG09 99HT.</h3>
                  <p><span>Freephone:</span>+1 800 559 6580</p>
                  <p><span>Telephone:</span>+1 800 603 6035</p>
                  <p><span>FAX:</span>+1 800 889 9898</p>
                  <p><span>E-mail:</span><a href="#">mail@demolink.org</a></p>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 form-box">
                <h4>Get in Touch</h4>
                <form id="contact-form">
                  <div className="contact-form-loader" />
                  <fieldset>
                    <label className="name form-div-1"> Name
                      <input type="text" placeholder='Name'  />
                      <span className="empty-message">*This field is required.</span>
                      <span className="error-message">*This is not a valid name.</span>
                    </label>
                    <label className="email form-div-2">Email
                      <input type="text" name="email" placeholder="E-mail*:" />
                      <span className="empty-message">*This field is required.</span>
                      <span className="error-message">*This is not a valid email.</span>
                    </label>
                    <label className="phone form-div-3">Telephone
                      <input type="text" name="phone" placeholder="Telephone:"  />
                      <span className="empty-message">*This field is required.</span>
                      <span className="error-message">*This is not a valid phone.</span>
                    </label>
                    <label className="message form-div-4">Messege
                      <textarea name="message" placeholder="Comment*:"   />
                      <span className="empty-message">*This field is required.</span>
                      <span className="error-message">*The message is too short.</span>
                    </label>
                    {/* <label class="recaptcha"><span class="empty-message">*This field is required.</span></label> */}
                    <div>
                      <a href="#" data-type="submit" className="btn-default btn2">Submit</a>
                      <p>*required fields</p>
                    </div>
                  </fieldset>
                  <div className="modal fade response-message">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                          <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                          You message has been sent! We will be in touch soon.
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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

export default Contact
