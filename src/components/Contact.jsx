import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from './img/linkedin.svg';
import ig from './img/ig.svg';
import x from "./img/x.svg";




function Contact() {

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_niall36', 'template_l3r8cjj',form.current, 'pfqprmGN_Tv3oSPu4')
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );

  e.target.reset();
}

  return (
    <section className=" p-[2em] md:px-[5em] lg:px-[7em]" id="Contact">
      <h1 className="text-[#3f3e77] p-[1.5rem] text-3xl font-bold md:text-4xl md:pb-[3rem]">Contact Me</h1>
      <div className="contact-container grid ">
        <form ref={form} action="" onSubmit={sendEmail} className=" contact-form grid  grid-rows-2 gap-[1rem] relative md:grid-rows-none	 ">
            <div className="contact-group grid gap-[1rem] md:grid-cols-2">
                <input type="text" name="user_name" placeholder="Name" required  className="p-[1.25rem] contact-input  md:h-[4rem]" />
                <input type="email" name="user_email" placeholder="Email" required className="p-[1.25rem] contact-input md:h-[4rem] " />

            </div>

            <textarea name="message" placeholder="Message" required id="" className=" contact-input contact-area h-[10rem] p-[1rem] resize-none md:h-[15rem]"></textarea>

            <button type="submit" className="mt-[1rem] p-[1rem] text-white bg-[#3f3e77] pointer md:w-max md:justify-self-center md:px-[2em]	">Send Message</button>
            <p></p>
        </form>
      </div> 

      <div className="socials text-[#3f3e77] py-[4em] grid justify-items-center  grid-cols-3 gap-[3rem] ">
      <a href="#Home">
        <img  className='w-[10vw] h-[5vh] cursor-pointer' src= {linkedin}  alt="" /></a>
         <a href="https://www.instagram.com/habeeb_beee/profilecard/?igsh=ZmsyYXM0dzN2eWJs">
         <img  className='w-[10vw] h-[5vh] cursor-pointer' src= {ig} alt="" /></a>
      <a href="https://x.com/ha90094?t=K-az8agFVVgE0yp9tvUfRA&s=09"> 
       <img  className='w-[10vw] h-[5vh] cursor-pointer' src= {x} alt="" /></a> 

         

        </div>
    </section>
  );
}

export default Contact;
