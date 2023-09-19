import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import WordCloud from '../WordCloud';
  

type Props = {}

const HotTopicCard = (props: Props) => {
  return (
    <Card className='col-span-4'>
    <CardHeader>
      <CardTitle className='text-2xl font-bold'>Hot Topics</CardTitle>
      <CardDescription>Click on a topic to start a qiuz on it</CardDescription>
    </CardHeader>
    <CardContent className='pl-2'>
      <WordCloud />
    </CardContent>
  </Card>
  
  )
}

export default HotTopicCard