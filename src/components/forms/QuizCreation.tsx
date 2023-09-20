"use client"

import { quizCreationSchema } from "@/app/schemas/forms/quiz";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form";

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

type Props = {
    topic: string;
}

type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation = (props: Props) => {

    const router = useRouter();
    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            topic: props.topic,
            type: "mcq",
            amount: 3,
        },
    });

    const onSubmit = (input: Input) => {

        alert(JSON.stringify(input, null, 2));
    }

    form.watch();
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Card>
                <CardHeader>
                    <CardTitle className='text-2xl text-bold'>Quiz Creation</CardTitle>
                    <CardDescription>Choose a topic</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {/* {Topic} */}
                            <FormField
                                control={form.control}
                                name="topic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Topic</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter a Topic" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please provide a Topic
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* {Amount} */}
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter a Topic"
                                                {...field}
                                                onChange={(e) => form.setValue("amount", parseInt(e.target.value))}
                                                min={1}
                                                max={10}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            You can choose how many questions you would like to be
                                            quizzed on here.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* {Buttons} */}
                            <div className="flex justify-between">
                                <Button
                                    type="button"
                                    variant={form.getValues("type") === "mcq" ? "default" : "secondary"}
                                    onClick={() => form.setValue("type", "mcq")}
                                    className="w-1/2 rounded-none rounded-l-lg"
                                >
                                    <CopyCheck className="w-4 h-4 mr-2" />
                                    MCQ
                                </Button>
                                <Separator orientation = "vertical"/>
                                <Button
                                    type="button"
                                    variant={form.getValues("type") === "open_ended" ? "default" : "secondary"}
                                    onClick={() => form.setValue("type", "open_ended")}
                                    className="w-1/2 rounded-none rounded-r-lg"
                                    >
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Open Ended
                                </Button>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>

            </Card>

        </div>
    )
}

export default QuizCreation