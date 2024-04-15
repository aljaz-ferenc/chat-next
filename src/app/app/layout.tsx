import Sidebar from '@/components/Sidebar'
import React from 'react'

type AppLayoutProps = {
    children: React.ReactNode
}

export default function AppLayout({children}: AppLayoutProps) {
  return (
    <div className='flex h-full'>
        <Sidebar/>
        {children}
    </div>
  )
}
