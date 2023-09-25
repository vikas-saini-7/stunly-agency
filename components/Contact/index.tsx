"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import NewsLatterBox from "./NewsLatterBox";
import Alert from '../Alert';
import Link from 'next/link';

// service_8t0zx4l  service ID
// template_21jdfee temp ID

const Contact = ({isHomePage}) => {
  // alert 
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false)

  const showAlert = () => {
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm('service_8t0zx4l', 'template_21jdfee', form.current, 'TC-8cU2eilptFIVWx')
      .then((result) => {
          console.log(result.text);
          setAlertSuccess(true);
          setAlertMessage('Message sent');
          showAlert();
          form.current.reset();
          setTimeout(closeAlert, 7000);
          setLoading(false)
      }, (error) => {
          console.log(error.text);
          setAlertSuccess(false);
          setAlertMessage('An Error Occured! Try again later')
          showAlert()
          setTimeout(closeAlert, 7000);
          setLoading(false)
      });
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-20">
      <div className="container">
        
        {isAlertVisible && (
          <Alert message={alertMessage} onClose={closeAlert} success={alertSuccess} />
        )}

        {/* {isHomePage &&
        <div className="container hire-us-page">
          <div className="item py-8 px-4 sm:px-6 lg:px-8 flex items-center dark:bg-dark shadow-md">
              <div className="left">
                <h2>Email</h2>
                <p>stunlyagency@gmail.com</p>
                <Link href='' target="_blank">
                  <button className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 mt-4">Go to Mail</button>
                </Link>
              </div>
              <div className="right">
                <img src='' alt="" />
              </div>
            </div>
          <div className="item py-8 px-4 sm:px-6 lg:px-8 flex items-center dark:bg-dark shadow-md">
              <div className="left">
                <h2>Phone</h2>
                <p>+91 7972 1514 99</p>
                <Link href='' target="_blank">
                  <button className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 mt-4">Call Now</button>
                </Link>
              </div>
              <div className="right">
                <img src='' alt="" />
              </div>
            </div>
        </div>
        } */}

        

        <div className="mt-8 -mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Do Contact us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                      name="user_name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                      required
                      name="user_email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="user_phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Phone Number ( Optional )
                      </label>
                      <input
                      name="user_phone"
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    {/* Submit button  */}
                    <button
                      disabled={loading ? true : false}
                      style={{opacity : loading ? '0.5' : '1'}}
                      className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
                      >
                        {loading ? <div className='loading-button'>Loading<span className="loader"></span></div> : 'Contact'}
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
