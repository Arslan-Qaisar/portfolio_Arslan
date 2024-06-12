import { FaWhatsapp, FaMapMarker, FaEnvelope, FaPhoneSquare, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';



export default function Contact() {
  return (
    <div className="contact" id='contact'>
      <p className="text-center font-bold text-4xl "> Contact Me</p>
      <div className="flex mt-5 last">

        <div className="form">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="3f8c6355-69df-4b76-8151-0b02fba96b1a"></input>
            <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
            <p className="name  pt-5 ">Name:</p>
            <input type="text" placeholder="Enter your name here" name='first_name' className="input mt-1 h-8" required />
            <p className="mail pt-3">Email:</p>
            <input type="text" placeholder="Enter your mail here" name='mail' className="input mt-1 h-8" required />
            <p className="msg pt-3">Your Message:</p>
            <textarea name="message" id="" className="input mt-1 h-24 "></textarea>

            <button className="bttn mt-5" type='submit'>Send Message</button>
          </form>
        </div>

        <div className='links'>
          <div className='flex'>
            <FaPhoneSquare size={35} />
            <p className='text-2xl ml-2'>03456277959</p>
          </div>
          <div className='flex '>
            <FaEnvelope size={35} />
            <p className='text-2xl ml-3'>arslan.qaisar.dev@gmail.com</p>
          </div>
          <div className='flex'>
            <FaMapMarker size={35} />
            <p className='text-2xl ml-3'>Hajweri Town, Faisalabad, Pakistan</p>
          </div>
          <div className="icons flex gap-10">
            <Link href="https://wa.me/+923456277959" target='_blank' className='icnw'>
              <FaWhatsapp size={35} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61552942703649" target='_blank' className='icnf'>
              <FaFacebook size={35} />
            </Link>
            <Link href="https://www.instagram.com/arslan._.qaisar/" target='_blank' className='icni'>
              <FaInstagram size={35} />
            </Link>
            <Link href="https://www.linkedin.com/in/arslan-qaisar-74379228b/" target='_blank' className='icnl'>
              <FaLinkedin size={35} />
            </Link>
            <Link href="https://github.com/Arslan-Qaisar" target='_blank' className='icng'>
              <FaGithub size={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
