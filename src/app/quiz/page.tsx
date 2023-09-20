import QuizCreation from '@/components/forms/QuizCreation'
import React from 'react'
import {redirect} from "next/navigation"
import { getAuthSession } from '@/lib/nextauth'

type Props = {
    searchParams: {
        topic? : string;
    };
}

export const metadata = {

    title : "Quiz | Quiz Maker",
    description: "Quiz me on anything",

}

const QuizPage = async ({searchParams}: Props) => {

    const session = await getAuthSession();

    if(!session?.user){
        redirect("/")
    }
  return (
        <QuizCreation topic ={searchParams.topic ?? ""}/>
  )
}

export default QuizPage