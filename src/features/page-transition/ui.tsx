import React from 'react'
import { usePageTransition } from '../../shared/hooks/usePageTransition'

export const withTransition = (component: () => React.ReactNode) => () => {
  const pagetransition = usePageTransition();
  return (
    <>
    {pagetransition ? "waaitnignasd" : component()}
    </>
  )
}
