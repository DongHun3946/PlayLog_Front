const Button = ({children, text, color, padding = "5px"}) => {
  return (
    <button 
      onClick={handleClick}
      style={{
        backgroundColor: color, 
        padding: padding
      }}>
      {text}
      {children}
    </button>
  )
}

export default Button;