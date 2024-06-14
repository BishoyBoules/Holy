import { useState, useRef } from 'react'
import logo from '../../assets/images/logo.jpeg'
// import arabic from '../../assets/images/Arabic.png'
import NavbarItem from './NavbarItem'
import Button from '../../layout/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({showModalHandler}) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef()

  const onClose = (e) => {
    if(menuRef.current == e.target){
      setShowMenu(false)
  }
  }

  const items = [
    {
      name: "Home",
      link: "#",
      img: false
    },
    {
      name: "About",
      link: "#about",
      img: false
    },
    {
      name: "Services",
      link: "#services",
      img: false
    },
    {
      name: "Contact Us",
      link: "#contact",
      img: false
    },
    // {
    //   name: "العربية",
    //   link: "#",
    //   img: <img className='w-3 h-3' src={arabic} alt='arabic'/>
    // },
  ]
  return (
    <div className='flex flex-row fixed top-0 z-20 w-full bg-white md:justify-evenly sm:justify-between items-center p-4'>
      <section>
        <img className='w-[70px] h-auto rounded-full' src={logo} alt='logo'/>
      </section>
      <FontAwesomeIcon onMouseEnter={(e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
        }} icon={faBars} className='md:hidden sm:block text-[35px]'/>
      {showMenu && <div onClick={onClose} ref={menuRef} className={"absolute flex flex-col bg-[#809BAC] p-3 rounded-l-3xl transition duration-500 top-0 right-[-300px] " + (showMenu && "right-[0]")}>
      <FontAwesomeIcon onMouseEnter={(e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
        }} icon={faClose} className='text-[20px] absolute left-2 p-2 bg-[#144463] text-[#EFF7F8] rounded-full'/>
        <section className='flex flex-col  justify-between items-center text-[#144463]'>
          {items.map(({name, link, img}) => (
              <NavbarItem key={name} name={name} link={link} image={img}/>
          ))}
        </section>
        <section>
          <Button clickHandler={showModalHandler} name={"GET A QUOTE"} className={"w-30 bg-[#144463] text-[#EFF7F8] duration-500 py-3 px-5 hover:text-[#809BAC] font-bold rounded-md"}/>
        </section>
      </div>}
        <section className='md:flex flex-row sm:hidden justify-between items-center text-black'>
          {items.map(({name, link, img}) => (
              <NavbarItem key={name} name={name} link={link} image={img}/>
          ))}
        </section>
        <section className='md:block sm:hidden'>
          <Button clickHandler={showModalHandler} name={"GET A QUOTE"} className={"w-30 bg-[#144463] text-[#EFF7F8] duration-500 py-3 px-5 hover:text-[#809BAC] font-bold rounded-md"}/>
        </section>
    </div>
  )
}

export default Navbar