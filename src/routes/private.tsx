/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { getFromLocal } from '../helpers/handleLocalStorage'

const Private = <P extends object>(
  Wrapped: React.ComponentType<P>
): React.FC<P> => {
  const PrivateComponent: React.FC<P> = (props) => {
    const localToken = getFromLocal<any>('token')
    if (!localToken) {
      window.location.href = '/'
      return null
    }
    return <Wrapped {...props} />
  }
  return PrivateComponent
}

export default Private
