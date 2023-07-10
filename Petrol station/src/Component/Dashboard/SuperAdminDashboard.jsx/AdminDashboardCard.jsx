import React from 'react'

const AdminDashboardCard = ({icon, quantity, cardText, iconBackground}) => {
  return (
    <>
        <div className='hover:cursor-pointer shadow-md flex items-center space-x-4 hover:shadow-lg bg-white px-5 py-3 ipad:h-44 mini:h-36 rounded-md transition-shadow'>
            <div className={`bg-[${iconBackground}] w-20 h-20 flex justify-center items-center`}>
                <img src={icon} alt=''/>
            </div>
            <div className=''>
                <p className='font-pt text-textColor text-xl'>{quantity}</p>
                <p className=''>{cardText}</p>
            </div>
        </div>
    </>
  )
}

export default AdminDashboardCard