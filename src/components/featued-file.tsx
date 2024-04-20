import { type File } from '@/types/File'
import { Card, CardContent } from './ui/card'
import React, { type JSX, type SVGProps } from 'react'

const FeaturedFile = ({ file }: { file: File }) => {
  return (
    <Card className='max-w-md overflow-hidden mb-4'>
      <CardContent className='p-6'>
        <div className='flex items-center space-x-4'>
          <div className='flex w-10 h-10 items-center justify-center rounded-full bg-gray-100'>
            <FileTypeIcon className='w-6 h-6 text-gray-500' />
          </div>
          <div className='space-y-1.5'>
            <h2 className='text-base font-semibold leading-none'>
              {file.name}
            </h2>
            <dl className='grid w-full grid-cols-3 items-center gap-1 text-xs space-x-4'>
                <div className='flex items-center space-x-1'>
                  <CalendarIcon className='w-4 h-4 text-gray-400' />
                  <dt className='sr-only'>Uploaded at</dt>
                  <dd className='text-gray-400'>
                    {file.uploadDate.toDateString()}
                  </dd>
                </div>
                <div className='flex items-center space-x-1'>
                  <UserIcon className='w-4 h-4 text-gray-400' />
                  <dt className='sr-only'>Uploaded by</dt>
                  <dd className='text-gray-400'>{file.author}</dd>
                </div>
                <div className='flex items-center space-x-1'>
                  <DownloadIcon className='w-4 h-4 text-gray-400' />
                  <dt className='sr-only'>Downloads</dt>
                  <dd className='text-gray-400'>{file.downloads}</dd>
                </div>
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarIcon (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
      <line x1='16' x2='16' y1='2' y2='6' />
      <line x1='8' x2='8' y1='2' y2='6' />
      <line x1='3' x2='21' y1='10' y2='10' />
    </svg>
  )
}

function DownloadIcon (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='7 10 12 15 17 10' />
      <line x1='12' x2='12' y1='15' y2='3' />
    </svg>
  )
}

function FileTypeIcon (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
      <polyline points='14 2 14 8 20 8' />
      <path d='M9 13v-1h6v1' />
      <path d='M11 18h2' />
      <path d='M12 12v6' />
    </svg>
  )
}

function UserIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  )
}

export default FeaturedFile
