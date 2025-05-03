import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            {/* image */}
            <div className=' w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/x/z/l-na-awd-19-yellow-aarvia-original-imagzffm3bkyzup2.jpeg?q=70' alt=''/>
            </div>

            {/* content */}
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>dfnfd jk dmd ssc</p>
                <p className='opacity-70'>size: L,White</p>
                <p className='opacity-70 mt-2'>dfnfd jk dmd ssc</p>
                <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6">
                  <p className="font-semibold">₹199</p>
                  <p className="opacity-50 line-through">₹448</p>
                  <p className="text-green-600 font-semibold">5% off</p>
                </div>
            </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        {/* Button to remove itam */}
                        <RemoveCircleOutlineIcon/> 
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm' >3</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            {/* Button to add itam */}
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>remove</Button></div>
            </div>
    </div>
  )
}

export default CartItem