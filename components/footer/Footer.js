import Link from 'next/link'
import logo from '/public/images/logo-2.svg'
import Shape1 from '/public/images/mail.svg'
import News1 from '/public/images/phone.svg'
import News2 from '/public/images/map.svg'
import Image from 'next/image'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}



const Footer = (props) => {


    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={logo} alt="blog" />
                                </div>
                                <p>Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu euismod.
                                    Egestas
                                    in morbi tristique.</p>

                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog">Latest News</Link></li>
                                    <li><Link onClick={ClickHandler} href="/project">Portfolio</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/project">Projects</Link></li>
                                    <li><Link onClick={ClickHandler} href="/login">Sign Up</Link></li>
                                    <li><Link onClick={ClickHandler} href="/testimonials">Testimonials</Link></li>
                                    <li><Link onClick={ClickHandler} href="/faq">Faq</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <ul>
                                    <li><Image src={Shape1} alt="" /><span>manit@gmail.com</span>
                                    </li>
                                    <li><Image src={News1} alt="" /> <span>(704) 555-0127
                                        <br />(208) 555-0112</span></li>
                                    <li><Image src={News2} alt="" /><span>4517 Washington Ave. <br />
                                        Manchter, Kentucky 495</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2024 Manit by <Link onClick={ClickHandler} href="/">wpOceans</Link>. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} href="/privacy">privacy & Policy</Link></li>
                                <li><Link onClick={ClickHandler} href="/terms">Terms</Link></li>
                                <li><Link onClick={ClickHandler} href="/about">About us</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;

