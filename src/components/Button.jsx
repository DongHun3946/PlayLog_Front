import 'styles/Button.css';

const Button = ({children, type, handleClick}) => {
  return (
    <>
      <button 
        onClick={handleClick}
        type={type}
        className={`btn btn-${type}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;