"use client"
import React from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import D3WordCloud from 'react-d3-cloud';

type Props = {}

const data = [
    {
        text: "Hey",
        value: 3,
    },
    {
        text: "Live",
        value: 5,
    },
    {
        text: "React",
        value: 4,
    },
    {
        text: "Web Dev",
        value: 7,
    },
    {
        text: "Next 13",
        value: 8,
    },
]

const fontSizeMapper = (word: { value: number }) =>
    Math.log2(word.value) * 5 + 16;

const WordCloud = (props: Props) => {

    const theme = useTheme();
    return (
        <>
            <D3WordCloud
                data={data}
                fontSize={fontSizeMapper}
                height={600}
                rotate={0}
                padding={10}
                // width={500}
                font="Times"
                fill={theme.theme === "dark" ? "white" : "black"}
            />
        </>
    )
}

export default WordCloud