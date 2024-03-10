import React from 'react'
import logo from '../../assets/images/logo.jpeg'
import arabic from '../../assets/images/Arabic.png'
import NavbarItem from './NavbarItem'
import Button from '../../layout/Button'

const Navbar = () => {
  const items = [
    {
      name: "Home",
      link: "#",
      img: false
    },
    {
      name: "About",
      link: "#",
      img: false
    },
    {
      name: "Services",
      link: "#",
      img: false
    },
    {
      name: "Products",
      link: "#",
      img: false
    },
    {
      name: "Our Partners",
      link: "#",
      img: false
    },
    {
      name: "Contact Us",
      link: "#",
      img: false
    },
    {
      name: "العربية",
      link: "#",
      img: <img className='w-3 h-3' src={arabic} alt='arabic'/>
    },
  ]
  return (
    <div className='flex flex-row justify-evenly items-center p-4'>
      <section>
        <img className='w-[70px] h-auto rounded-full' src={logo} alt='logo'/>
      </section>
      <section className='flex flex-row justify-between items-center'>
        {items.map(({name, link, img}) => (
            <NavbarItem key={name} name={name} link={link} image={img}/>
        ))}
      </section>
      <section>
        <Button name={"GET A QUOTE"} className={"w-30 bg-[#144463] text-[#EFF7F8] duration-500 py-3 px-5 hover:text-[#809BAC] font-bold rounded-md"}/>
      </section>
    </div>
  )
}

export default Navbar