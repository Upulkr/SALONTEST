import emailJs from '@emailjs/browser';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Contact() {
  const [loading, setLoading] = useState(false);
  const serviceId = "service_g1xvxic"
  const templateId ="template_2qqvyjj"
  const publicKey = "b1J72K4ktNOgANnsP"


  const form = useRef();





  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    // emailJs.sendForm('service_g1xvxic','template_2qqvyjj',e.target,'1oNKaXQwiTyrAENQ9',)
    emailJs.sendForm(serviceId, templateId, e.target, publicKey,).then((result)=>{
      console.log(result.text);
      setLoading(false)
      toast.success('Well done')

    },(error)=>{console.log(error.text);
      setLoading(false)
      toast.error('not submitted')})



    }
  
  return (
    <div className="grid grid-cols-1 bg-white ">
       <ToastContainer />
      <div className="relative">
        {" "}
        <LazyLoadImage src="./img/p.jpg" className="h-80 w-full object-cover"></LazyLoadImage>{" "}
      </div>

      <section className="  body-font relative">
        <div className="px- container mx-auto flex flex-wrap py-24 sm:flex-nowrap ">
          <div className="xl relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58164782.846126474!2d-142.1396116791268!3d27.153250409320055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891964c04d0f17%3A0x9954d851d387227e!2sSalon%20U!5e0!3m2!1sen!2slk!4v1697637303562!5m2!1sen!2slk"
              vnb-frameid="2993"
              style={{}}
            ></iframe>
            <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  ADDRESS
                </h2>
                <p className="mt-1 ">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-indigo-500">
                  example@email.com
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className=" flex w-full flex-col rounded-xl bg-white p-5 md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
            <h2 className="title-font text-gray-900-c mb-1 text-center text-lg font-medium">
              Contact Us
            </h2>
            <p className="mb-5 text-center  leading-relaxed text-gray-600  ">
              Leave your feedback or contact Us
            </p>
            <div className=''>
            <form onSubmit={sendEmail} className='dark' ref={form}>
              <div className="relative mb-4 text-center dark ">
                <label for="name" className="text-sm leading-7 text-gray-600 dark  dark:text-white">
                  Name
                </label>
                <input
                  onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4 text-center">
                <label for="email" className="text-sm leading-7 text-gray-600">
                  Email
                </label>
                <input
                  onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                  required
                  type="email"
                  id="email"
                  name="email_from"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4 text-center">
                <label for="message" className="text-sm leading-7 text-gray-600">
                  Message
                </label>
                <textarea
                   required
               
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type='submit' className=" rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none text-center">
                {loading?'Submitting':'Submit'}
                </button></div>

              {/* <p className="mt-3 text-xs text-gray-500">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p> */}
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;