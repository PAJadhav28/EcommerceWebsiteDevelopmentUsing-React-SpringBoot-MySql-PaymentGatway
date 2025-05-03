import React from 'react'
import AddressCard from '../../components/AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid container className='space-x-5'>
            <Grid item container className='shadow-xl p-5 rounded-md border' sx={{alignItems:"center",justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div>
                        <img className='w-[6rem] h-[6rem] object-cover object-top'
                     src='https://rukminim1.flixcart.com/image/612/612/xif0q/sari/6/t/z/free-sequined-embroidered-saree-granthva-fab-unstitched-original-imaggsq6b4y2adwk.jpeg?q=70'
                     alt=''/>
                    </div>
                    {/* content */}
                    <div>
                        <p>fhfh fjkif jfk</p>
                        <p> <span>Color: Pink</span> <span>Size: M</span></p>
                        <p>₹4486</p>
                    </div>
                </Grid>

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderDetails