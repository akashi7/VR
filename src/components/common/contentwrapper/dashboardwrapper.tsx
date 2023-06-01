import { FC, ReactElement, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

const ContentWrapper: FC<WrapperProps> = ({ children }): ReactElement => {
  return <div className='h-[100%] w-full bg-white '>{children}</div>
}

export default ContentWrapper
