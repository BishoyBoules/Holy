const Offer = ({name}) => {
  return (
    <div className="flex flex-row justify-evenly text-center w-[250px] bg-[#809BAC] rounded-xl">
          <h1 className='font-bold text-xl w-full h-full py-2 text-[#144463] uppercase my-1'>{name}</h1>
    </div>
  )
}

export default Offer