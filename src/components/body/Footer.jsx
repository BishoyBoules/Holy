import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/images/logo.jpeg'


const Footer = () => {
  const links = [
    {
      id:0,
      name: faFacebook,
      link: "https://www.facebook.com/profile.php?id=100063839435618&mibextid=PtKPJ9",
      color: "#316FF6"
    },
    {
      id:1,
      name: faInstagram,
      link: "https://www.instagram.com/holypestcontrol?igsh=MTg3MjY2OGthZHVhcg==",
      color: "#962fbf"
    },
    {
      id:2,
      name: faLinkedin,
      link: "https://www.linkedin.com/company/holy-pest-control/",
      color: "#0077b5"
    },
  ]
  return (
    <div className="p-10 flex flex-row justify-between items-center">
      <section className='flex flex-col justify-between items-center w-1/2'>
        <div>
          <img className='w-[90px] h-auto mb-4 rounded-full' src={logo} alt='logo'/>
        </div>
        <div>
          <p className='text-center w-80'>
          In Holy pco, we have developed our own integrated quality management system, and we are engaged in a continual learning process on quality standards and clients’ requirements and guidelines.
          </p>
        </div>
        <div className="my-5 flex flex-row justify-between items-center">
          {
            links.map(({id, name, link, color}) => (
              <a href={link} target='_block' key={id} className='w-10 h-10 rounded-full mx-5'>
                <FontAwesomeIcon className={'w-10 h-10 hover:w-12 hover:h-12 duration-500 text-['+color+']'} icon={name}/>
              </a>
            ))
          }
        </div>
      </section>
      <section className='flex flex-row justify-evenly items-center w-1/2'>
        <div className="flex flex-col justify-between items-center">
          <h1 className='font-bold'>Company</h1>
          <ul>
            <li><a href='#' >About Us</a></li>
            <li><a href='#' >Services</a></li>
            <li><a href='#' >Partners</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center pt-0">
          <h1 className='font-bold'>Help</h1>
          <ul>
            <li><a href='#' >Contact Us</a></li>
          </ul>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

export default Footer