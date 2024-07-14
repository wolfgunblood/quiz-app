import React from 'react'
import {redirect} from  "next/navigation"
import { getAuthSession } from '@/lib/nextauth'
import DetailsDialog from '@/components/dashboard/DetailsDialog'
import QuizMeCard from '@/components/dashboard/QuizMeCard'
import HistoryCard from '@/components/dashboard/HistoryCard'
import HotTopicCard from '@/components/dashboard/HotTopicCard'
import RecentCard from '@/components/dashboard/RecentCard'

type Props = {}

export const metadata = {

    title : "Dashboard | Quiz Maker",
    description: "Quiz me on anything",

}

const Dashboard = async (props: Props) => {

    const session = await getAuthSession();
    
    // if(!session?.user){
    //     redirect("/");
    // }

  return (
    <main className='p-8 mx-auto max-w-7xl'>
        <div className='flex items-center'>
            <h1 className='mr-3 text-3xl font-bold tracking-right'>Dashboard</h1>
            {/* <DetailsDialog /> */}
        </div>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <QuizMeCard />
            <HistoryCard />
        </div>
        <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7'>
            <HotTopicCard />
            {/* <RecentCard /> */}
        </div>
    </main>
  )
}

export default Dashboard