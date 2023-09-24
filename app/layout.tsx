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
    ]
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
