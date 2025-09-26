import clsx from 'clsx'

import FloatingActionBar from './FloatingActionBar'
import Footer from './Footer'
import Header from './Header'

export default function PageShell({
  children,
  mainClassName,
}: {
  children: React.ReactNode
  mainClassName?: string
}) {
  return (
    <>
      <Header />
      <main className={clsx(mainClassName)}>{children}</main>
      <Footer />
      <FloatingActionBar />
    </>
  )
}
