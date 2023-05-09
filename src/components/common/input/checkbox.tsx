import { CSSProperties, useState } from 'react'

type CheckboxProps = {
  checked: boolean
  onChange: (isChecked: boolean) => void
  className: string
  style?: CSSProperties
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  className,
  style,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setIsChecked(isChecked)
    onChange(isChecked)
  }

  return (
    <input
      type='checkbox'
      checked={isChecked}
      onChange={handleChange}
      className={className}
      style={style}
    />
  )
}

export default Checkbox
