import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
      </body>
    </html>
  )
}

export default RootLayout;