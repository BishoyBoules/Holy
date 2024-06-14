const NavbarItem = ({link,image, name}) => {
  return (
    <div className='flex flex-row justify-between items-center p-2.5 m-2.5'>
        {image}
        <a className='font-bold text-[18px] ml-1' href={link}>{name}</a>
    </div>
  )
}

export default NavbarItem