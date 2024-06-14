const Offer = ({name}) => {
  return (
    <div className="flex flex-row justify-evenly text-center w-[250px] hover:bg-[#144463] duration-500 bg-[#809BAC] rounded-xl">
          <h1 className='font-bold text-xl w-full h-full py-2 text-[#144463] hover:text-[#EFF7F8] duration-500 uppercase my-1'>{name}</h1>
    </div>
  )
}

export default Offer