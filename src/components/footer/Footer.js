import logo from '../../images/LOGO_footer.png'
import '../footer/footer.css'


function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt='Logo Kasa' className='logo-footer' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer