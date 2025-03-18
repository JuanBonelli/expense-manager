import React from 'react'
import { Skeleton } from './ui/skeleton'


const SkeletonList = () => {
  return (
    <div className="mt-8 flex w-full flex-col gap-4">
        <Skeleton className='h-16 w-full rounded-lg' />
        <Skeleton className='h-16 w-full rounded-lg' />
        <Skeleton className='h-16 w-full rounded-lg' />
    </div>
  )
}

export default SkeletonList