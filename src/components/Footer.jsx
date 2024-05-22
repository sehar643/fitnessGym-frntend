import React from 'react'
import '../style/footer.css'

const Footer = () => {
    return (
        <div>
          <div className="footer">
  <div className="container">		
    <div className="row text-center">						
      <div className="col-lg-12 col-sm-12 col-xs-12">
        <div className="footer_menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>						
        <div className="footer_copyright">
          <p>© 2021 Sai. All Rights Reserved.</p>
        </div>	
        <div className="footer_profile">
          <ul>
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
          </ul>
        </div>						
      </div>{/*- END COL */}							
    </div>{/*- END ROW */}					
  </div>{/*- END CONTAINER */}
</div>

        </div>

    )
}

export default Footer
