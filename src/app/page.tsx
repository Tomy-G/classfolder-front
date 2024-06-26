import React from 'react'
import QuickSearch from '@/components/quick-search'
import Schedule from '@/components/schedule'
import FeaturedFiles from '@/components/featured-files'
import files from '@/constants/mocks/Files'
import Groups from '@/components/groups'
import groups from '@/constants/mocks/Groups'
import Topics from '@/components/topics'

export default function Home () {
  return (
    <main className='flex w-full max-w-screen-3xl min-h-screen flex-col items-center px-10 mx-auto'>
      <QuickSearch />
      <div className='grid lg:grid-cols-2 gap-16 mt-8 w-full justify-center'>
        <Schedule />
        <FeaturedFiles files={files} />
        <Groups groups={groups}/>
        <Topics/>
      </div>
    </main>
  )
}
