import { CSSProperties, ChangeEvent, FC, useEffect, useRef } from 'react'

type InputProps = {
  value: string
  onChange: (value: string) => void
  type: 'text' | 'select'
  options?: string[]
  className: string
  style: CSSProperties
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  type,
  options,
  className,
  style,
}) => {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event.target.value)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = 'auto'
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`
    }
  }, [value])
  if (type === 'text') {
    return (
      <input
        type='text'
        value={value}
        className={className}
        onChange={handleInputChange}
        style={style}
      />
    )
  }

  if (type === 'select' && options) {
    return (
      <select
        value={value}
        onChange={handleInputChange}
        style={style}
        className={className}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

  return null
}

export default Input
