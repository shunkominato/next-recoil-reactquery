import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { createStyles, Button, Menu, Group, ActionIcon } from '@mantine/core';
// import { Button } from '@/components/button/Button'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title = 'FAクラフト' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
      <Button>送信</Button>
        {children}
      </main>
    </div>
  )
}