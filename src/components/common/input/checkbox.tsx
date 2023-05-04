import { useState } from 'react'

type CheckboxProps = {
  checked: boolean
  onChange: (isChecked: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
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
      className={`lg:h-6 lg:w-6 h-4 w-4 accent-black`}
    />
  )
}

export default Checkbox
