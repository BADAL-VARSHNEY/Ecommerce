import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className='footer'>
        <div className="footer__container">
          <div className='footer__row'>
            <div className="footer__col">
              <div className='logo'>
                <h1>Cloudmart</h1>
              </div>
              <p className='footer__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum temporibus voluptas minus. Ipsam modi fugit aperiam eveniet eum. Similique?
              </p>
            </div>
            <div className="footer__col">
              <div className="footer__quick-link">
                <h3>Top Categories</h3>
                <table style={{ marginTop: '.8rem' }} >
                  <tr>
                    <Link to="#" ><td>Modern Curtain</td></Link>
                  </tr>
                  <tr>
                    <Link to="#" ><td>Modern Sofa</td></Link>
                  </tr>
                  <tr>
                    <Link to="#" ><td>Arm Chair</td></Link>
                  </tr>
                  <tr>
                    <Link to="#" ><td>Smart fan</td></Link>
                  </tr>
                  <tr>
                    <Link to="#" ><td>LightLamp</td></Link>
                  </tr>
                </table>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__quick-link">
                <h3>Useful Links </h3>
                <table style={{ marginTop: '.8rem' }} >
                  <tr>
                    <Link to="/shop" ><td>Shop</td></Link>
                  </tr>
                  <tr>
                    <Link to="/cart" ><td>Cart</td></Link>
                  </tr>
                  <tr>
                    <Link to="/login" ><td>Login</td></Link>
                  </tr>
                  <tr>
                    <Link to="#" ><td>Privacy Policy</td></Link>
                  </tr>
                  <tr>
                    <Link to="#" ><td>Service Center</td></Link>
                  </tr>
                </table>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__quick-link">
                <h3>Contact</h3>
                <table style={{ marginTop: '.8rem' }} >
                  <tr>
                    <span><i className='ri-map-pin-line' /></span>
                    <p>A-15, Ajmer Rd, Vidyut Nagar B, Vidhyut Nagar, Jaipur, Rajasthan 302021
                    </p>
                  </tr>
                  <tr>
                    <span><i className='ri-phone-line' /></span>
                    <p>+91 7845678920</p>
                  </tr>
                  <tr>
                    <span><i className='ri-mail-line' /></span>
                    <p>eplanetsoft123@gmail.com</p>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <p>Copyright {year} developer by Badal Varshney</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer