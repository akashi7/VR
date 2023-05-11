import { Modal } from 'antd'
import { FC, ReactElement } from 'react'

interface Props {
  Toogle: () => void
  title: string
  width: number
  toogle: boolean
  Component: () => ReactElement
}

const GlobalModal: FC<Props> = ({
  title,
  width,
  toogle,
  Toogle,
  Component,
}): ReactElement => {
  return (
    <Modal
      title={title}
      centered
      onCancel={() => Toogle()}
      onOk={() => Toogle()}
      width={width}
      footer={null}
      open={toogle}
      closable={false}
    >
      <Component />
    </Modal>
  )
}

export default GlobalModal
