import React from 'react'
import cardImage from "../../assets/images/cardImg.png"

const Valuable = () => {
  return (
    <section>
        <div className='max-w-[1336px] w-full mx-auto px-[20px]'>
            <div>
                <img src={cardImage} alt="cardImage" width={636} height={560}/>
            </div>
        </div>
    </section>
  )
}

export default Valuable