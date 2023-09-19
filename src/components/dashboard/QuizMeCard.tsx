"use client"

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useRouter } from 'next/navigation';
import { BrainCircuit } from 'lucide-react';

type Props = {}

const QuizMeCard = (props: Props) => {
    const router = useRouter();
    return (
        <Card 
            className='hover:cursor-pointer hover:opacity-75'
            onClick={() => router.push('/quiz')}
        >
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-2xl font-bold'>Quiz Me!</CardTitle>
                <BrainCircuit size={48} strokeWidth={2.5} />
            </CardHeader>
            <CardContent>
                <p className='text-sm text-muteed-foreground'>Challenge yourself to a qiuz with a topic of your choice</p>
            </CardContent>
        </Card>

    )
}

export default QuizMeCard