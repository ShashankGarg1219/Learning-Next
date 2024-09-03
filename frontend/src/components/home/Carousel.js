import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function CarouselComponent() {
    const [showScroll, setShowScroll] = useState(false);
    const [animatedText, setAnimatedText] = useState('');
    const fullText = "“Education is the most powerful weapon which you can use to change the world.”";

    const handleButtonClick = (topic) => {
        alert(`More details about ${topic}`);
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        let index = 0;
        const interval = setInterval(() => {
            setAnimatedText((prev) => prev + fullText[index]);
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 50);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Head>
                <title>E-Learning Platform</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                emulateTouch
                showThumbs={false}
            >
                <div style={{ maxHeight: "36rem" }} className='object-center brightness-50'>
                    <img src="https://thumbs.dreamstime.com/b/kids-learning-5684253.jpg" alt="kids learning" />
                </div>
                <div style={{ maxHeight: "36rem" }} className='object-center brightness-50'>
                    <img src="https://images.ctfassets.net/gqyi78iyinsr/4yiMj4uGB7Z63Z6oHdUZbr/d019df9ad94276f8a9bdb771efca6e10/shutterstock_2092730650.jpg?w=1600&h=1067&fl=progressive&q=86&fm=jpg" alt="children studying" />
                </div>
                <div style={{ maxHeight: "36rem" }} className='object-center brightness-50'>
                    <img src="https://s37356.pcdn.co/wp-content/uploads/2021/03/Engage-the-7-Types-of-Learners-in-your-Classroom.jpg" alt="students in class" />
                </div>
                <div style={{ maxHeight: "36rem" }} className='object-center brightness-50'>
                    <img src="https://cdn.vectorstock.com/i/1000x1000/45/75/group-of-children-learning-vector-22784575.webp" alt="group of children learning" />
                </div>
            </Carousel>

            <div className="carousel-container">
                <h2 className="text-3xl font-bold text-center my-8">About Education</h2>
                <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
                        <img src="https://img.freepik.com/free-vector/man-getting-award-writing_74855-5891.jpg" alt="Student Success" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold mb-2">Student Success</h3>
                        <p className="mb-4">Learn about strategies to help students succeed academically and personally.</p>
                        <button onClick={() => handleButtonClick('Student Success')} className="text-blue-500 underline">Learn More</button>
                    </div>
                    <div className="card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
                        <img src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg" alt="Innovative Teaching" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold mb-2">Innovative Teaching</h3>
                        <p className="mb-4">Explore new teaching methods that engage and inspire students in the classroom. Understanding what they have mastered and identifying areas for improvement enhances their motivation to learn specific topics.</p>
                        <button onClick={() => handleButtonClick('Innovative Teaching')} className="text-blue-500 underline">Learn More</button>
                    </div>
                    <div className="card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
                        <img src="https://thumbs.dreamstime.com/b/education-technology-e-learning-online-training-webinar-seminar-knowledge-business-personal-development-education-technology-e-138022989.jpg" alt="Educational Technology" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold mb-2">Educational Technology</h3>
                        <p className="mb-4">Discover the latest technology tools and resources for enhancing learning experiences and the study and ethical practice of facilitating learning and improving performance by creating, using, and managing appropriate technological processes and resources.</p>
                        <button onClick={() => handleButtonClick('Educational Technology')} className="text-blue-500 underline">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                    <iframe
                        className="mx-auto md:mr-4"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your_video_id"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="text-gray-800 md:w-1/2 mt-4 md:mt-0">
                        <h2 className="text-2xl font-bold mb-2">Our Platform "Academy"</h2>
                        <p className="mb-4">
                            "Education Platform - is a temple of learning which students worship each day without fail."
                            It is the institution that offers education systematically and disciplined manner
                            to the students of all age groups. Our school provides English classes for fluent English-speaking children between the ages of 3 to 11, being brought up in a bi-lingual environment.
                        </p>
                        <a href="#" className="text-blue-500 underline">Know More</a>
                    </div>
                </div>
                <div className="mt-6 text-xl font-bold animate-typing whitespace-nowrap overflow-hidden border-r-4 border-black pr-5">
                    {animatedText}
                </div>
            </div>

            
            <div className="flex flex-col items-center justify-center bg-yellow-400 py-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">ARE YOU AN ALUMNI?</h2>
                <p className="text-center text-black-900 mb-6">
                    We are proud of our alumni and we would love to hear from you. Please register with us to stay connected with our platform and receive updates on our events and activities.
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                    REGISTER HERE
                </button>
            </div>



            <div className="w-full">
  <main className="w-full flex flex-col items-center justify-center p-4">
    <div className="w-full flex flex-col md:flex-row items-center justify-between">
      <div className="mb-6 md:mb-0 md:mr-6">
        <div className="flex items-center mb-4">
          <img
            src="https://i.pinimg.com/originals/16/9a/12/169a127e655da2f16a3309d9f1cb6225.jpg"
            className="w-24 h-24 mr-4"
            alt="E-Learning Platform Logo"
          />
          <h1 className="text-4xl font-bold text-green-700">E-Learning Platform</h1>
        </div>
        <p className="mb-4 text-xl">Bhopal, Madhya Pradesh</p>
        <p className="mb-4 text-xl">
          Email: <a href="mailto:e-learning@gmail.com" className="text-blue-500">e-learning@gmail.com</a>
        </p>
        <p className="mb-2 text-xl">
          Phone: <a href="tel:+91*********" className="text-blue-500">+91 *******</a>
        </p>
        <p className="mb-6 text-xl">
          Phone: <a href="tel:+917828531219" className="text-blue-500">+91 7828531219</a>
        </p>
      </div>
      <div className="w-full md:w-2/3 h-96">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=80.8110%2C24.5664%2C80.9410%2C24.6164&amp;layer=mapnik"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </main>
</div>


            <Footer />

            {showScroll && (
                <button
                    className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    onClick={scrollToTop}
                >
                    ↑ Top
                </button>
            )}
        </div>
    );
}

export default CarouselComponent;
