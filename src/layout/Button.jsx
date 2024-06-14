const Button = ({name, className, clickHandler}) => {
  return (
    <button onClick={clickHandler} className={className}>{name}</button>
  )
}

export default Button