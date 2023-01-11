import '../sass/Card.scss'

const Card = ({name, img}) => {
  return (
    <div className='card'>
        <p className='cardName'>
          {name}
        </p>
        <div className='cardCircle'>
            <img className='cardImg' src={img} alt='pokemon img' />
        </div>
    </div>
  )
}

export {Card}