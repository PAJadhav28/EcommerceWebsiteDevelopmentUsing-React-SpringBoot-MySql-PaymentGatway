import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='ml-10  p-5 shadow-lg hover:shadow-2xl border'>
        <Grid container spacing={30} sx={{justifyContent:"space-between"}}>

            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    
                    <img className='w-[6rem] h-[6rem] object-cover object-top'
                     src='https://rukminim1.flixcart.com/image/612/612/xif0q/sari/6/t/z/free-sequined-embroidered-saree-granthva-fab-unstitched-original-imaggsq6b4y2adwk.jpeg?q=70'
                     alt=''/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>jdf eje eiow</p>
                        <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹448</p>
            </Grid>

            <Grid item xs={4}>
                { true && <div>
                    <p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Deliverd on March 03
                        </span>
                    </p>
                    <p className='text-xs'>
                        Your Item Has Been Delivered
                    </p>
                </div>}
                { false && <p>
                    <span>Expected Delivery on March 03</span>
                </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard