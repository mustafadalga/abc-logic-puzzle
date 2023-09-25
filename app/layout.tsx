import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
    title: 'ABC Logic Puzzle: Engage Your Brain with the Ultimate Puzzle Game',
    description: 'Step into the captivating world of ABC Logic Puzzle, the premier brain-teasing game where every row and column boasts a distinct combination of A, B, and C. Test your wits, hone your problem-solving abilities, and indulge in hours of intellectual entertainment!',
    keywords: [
        'ABC puzzle',
        'logic games',
        'brain challenges',
        'strategy puzzles',
        'mind teasers',
        'intellectual games',
        'board puzzles',
        'problem-solving games',
        'mental workouts',
        'brain training'
    ],
    authors: [ { name: "Mustafa Dalga", "url": "https://github.com/mustafadalga/abc-logic-puzzle" } ],
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        }, {
            rel: "mask-icon",
            url: "/safari-pinned-tab.svg",
            color: "#a855f7"
        }
    ],
    themeColor: "#ffffff",
    applicationName: "ABC Logic Puzzle",
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen w-full bg-gray-200 text-indigo-600`}>{children}</body>
        </html>
    )
}
