import '../sass/Button.scss'

const Button = ({icon, handleClick}) => {
  return (
    <div className='buttonBox'>
      <button 
       className='button' 
       onClick={handleClick} 
      >
        {icon}
      </button>
      <div className='buttonShadow'></div>
    </div>

  )
};

export {Button}