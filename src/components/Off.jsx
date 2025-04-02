import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Off = () => {
  return (
    <>
      <div className='w-full bg-[#f5f5f7] py-4'>
        <div className='w-[60%] mx-auto text-center'>
          <h2 className='text-[14px]'>
            Get up to 24 months of No Cost EMI‡ plus up to ₹10000.00 instant cashback◊ on MacBook Air with eligible cards.
            <a href="https://www.apple.com/in/shop/buy-mac/macbook-air" className='text-blue-500 mx-1 text-[14px] inline-flex items-center'>
              Buy <IoIosArrowForward className='text-[12px]' />
            </a>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Off;
