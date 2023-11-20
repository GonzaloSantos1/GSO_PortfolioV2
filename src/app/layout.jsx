import './globals.css'
import { Montserrat } from 'next/font/google'
import BackgroundGradient from './components/BackgroundGradient'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Gonzalo Santos',
	description: 'Frontend developer',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				{/* <div className='fixed h-screen bg-black'>
					<BackgroundGradient />
				</div> */}
				{children}
			</body>
		</html>
	)
}
