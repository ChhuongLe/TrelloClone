import './globals.css';
import Modal from '@/components/Modal';

export const metadata = {
  title: 'Trello 2.0 Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F6F8]'>
        {children}
        <Modal />
      </body>
    </html>
  )
}
