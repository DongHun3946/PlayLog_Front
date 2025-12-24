import 'styles/Button.css';

const Button = ({children, className = '', type, handleClick}) => {
  return (
    <>
      <button 
        type={type}
        onClick={handleClick}
        className={`${className} btn btn-${type}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;