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
    <div id='contact' className="py-10 px-16 flex lg:flex-row sm:flex-col justify-between items-center bg-[#144463]">
      <section className='flex flex-col justify-between items-center'>
        <div>
          <img className='w-[120px] h-auto mb-4' src={logo} alt='logo'/>
        </div>
        <div>
          <p className='lg:text-start text-center w-80 uppercase text-[#EFF7F8]'>
          In Holy pco, we have developed our own integrated quality management system, and we are engaged in a continual learning process on quality standards and clients' requirements and guidelines.
          </p>
        </div>
      </section>
      <section className='flex flex-row justify-evenly items-center w-60'>
        <div className="flex flex-col justify-between items-center">
          <h1 className='font-bold uppercase lg:block hidden text-[#EFF7F8]'>connect with us</h1>
          <div className="my-5 flex flex-row justify-center items-center">
          {
            links.map(({id, name, link, color}) => (
              <a href={link} target='_block' key={id} className='w-10 h-10 rounded-full lg:mx-5 sm:mr-2 sm:ml-0'>
                <FontAwesomeIcon className={'w-10 h-10 p-0 cursor-pointer hover:w-12 hover:h-12 duration-500 text-['+color+']'} icon={name}/>
              </a>
            ))
          }
        </div>
        </div>
      </section>
      <section className='text-[#EFF7F8]'>
      <div className="flex flex-col justify-between text-center pt-0">
          <h1 className='font-bold uppercase lg:block hidden'>customer care</h1>
          <ul className="mt-3">
            <li>Phone: 01001800294</li>
            <li>Whatsapp: 01557576755</li>
            <li>Email: HolyPestControl@gmail.com</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Footer