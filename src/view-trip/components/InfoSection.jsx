// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Button } from '@/components/ui/button'
import { FaShare } from "react-icons/fa6";

function InfoSection({ trip }) {
  //   const [photoUrl,setPhotoUrl] = useState();
  //   useEffect(()=>{
  //     trip&&GetPlaceImg();
  //   },[trip])

  //   const GetPlaceImg=async()=>{
  //     const data={
  //       textQuery:trip?.userSelection?.location
  //     }
  //     const result= await GetPlaceDetails(data).then(resp=>{
  //       // console.log(resp.data.places[0].photos[3].name)
  //       const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
  //       setPhotoUrl(PhotoUrl);

  //     })
  //   }
  return (
    <div className='max-w-xl mx-auto'>
      <img className='h-[200px] sm:h-[280px] md:h-[340px] w-full object-cover rounded-xl' src="/road-trip-vocation.jpg" alt="" />

      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5'>
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-lg sm:text-xl md:text-2xl mt-2 sm:mt-0'>{trip?.userSelection?.location?.label}</h2>
          <div className='flex flex-wrap gap-3 sm:gap-5 mt-2'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm'>
              📆 {trip?.userSelection?.noOfDays} Day
            </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm'>
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm'>
              💏 No. of traveler: {trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button className='mt-3 sm:mt-0 sm:ml-5'>
          <FaShare />
        </Button>
      </div>
    </div>
  )
}

export default InfoSection