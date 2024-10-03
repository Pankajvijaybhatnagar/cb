import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '/public/images/testimonial/1.jpg';
import image2 from '/public/images/testimonial/2.jpg';
import image3 from '/public/images/testimonial/3.jpg';

import Shape1 from "/public/images/testimonial/star.svg";
import Shape2 from "/public/images/testimonial/star-1.svg";
import Shape3 from "/public/images/testimonial/quote.png";
import Image from 'next/image';

const TestimonialData = [
    {
        id: "01",
        text: "It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.",
        subtitle: "Senior Developer",
        title: "Leslie Alexander",
        image: image1
    },
    {
        id: "02",
        text: "It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.",
        subtitle: "CEO of BREAG",
        title: "Eleanor Pena",
        image: image2
    },
    {
        id: "03",
        text: "It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.",
        subtitle: "Senior Developer",
        title: "Jeffrey Dykes",
        image: image3
    }
]



const TestimonialSection = () => {
    const ClickHandlar = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        infinite: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        },

        ]
    };
    return (
        <section className="testimonial-section section-padding">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-xl-4 col-12">
                        <div className="section-title">
                            <span>Testimonial</span>
                            <h2>Our Latest Case Studies</h2>
                            <p>Fringilla feugiat et imperdiet iaculis sceliue vestibulum diam eget fusce. Vitae id amet
                                eleifend lacus ornare nisl leo dis est. </p>
                            <div className="testimonial-btn">
                                <Link href="/about" className="theme-btn" onClick={ClickHandlar}> Get in Touch <i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-12">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                {TestimonialData.map((Testimonials, tky) => (
                                    <div className="item" key={tky}>
                                        <div className="client">
                                            <div className="image">
                                                <Image src={Testimonials.image} alt="" />
                                            </div>
                                            <div className="text">
                                                <h2>{Testimonials.title}</h2>
                                                <span>{Testimonials.subtitle}</span>
                                            </div>
                                        </div>
                                        <div className="reting">
                                            <ul>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape1} alt="" /></li>
                                                <li><Image src={Shape2} alt="" /></li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <p>{Testimonials.text}</p>
                                        <div className="icon">
                                            <Image src={Shape3} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection







