{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'

import classes from './index.module.scss'
import HeaderComponent from './HeaderComponent'
import { Header as HeaderType } from '../../../payload/payload-types'

export async function Header() {
  let header: HeaderType | null = null

  try {
    header = await fetchHeader()
  } catch (error) {}

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
