import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '../components/NavbarHome/Navbar'

const globalFont = Source_Sans_3({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ['normal', 'italic'],
    variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
    title: 'Laeth',// The Movie Database(TMDB)
    description: 'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
    icons: {
        icon: ["/favicon.png"],
        apple: ["/favicon.png"],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className='scroll-smooth'>
            <body className={`${globalFont.variable} debug-screens`}>
                <ClerkProvider>
                    <Navbar />
                    <main className='flex flex-col gap-10'> {/*//! please dont remove main tag  */}
                        {children}
                    </main>
                    <Footer />
                </ClerkProvider>
            </body>
        </html>

    )
}
