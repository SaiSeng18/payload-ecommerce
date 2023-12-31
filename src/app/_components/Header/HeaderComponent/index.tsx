'use client'

import Link from 'next/link'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Image from 'next/image'

import classes from './index.module.scss'
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image
            src="/logo-black.svg"
            alt="logo"
            height={50}
            width={250}
            className={classes.logo}
          />
        </Link>

        <HeaderNav header={header} />
        {/* <MobileNav header={header} /> */}
      </Gutter>
    </nav>
  )
}
export default HeaderComponent
