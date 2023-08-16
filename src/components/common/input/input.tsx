/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from 'formik'

type InputProps = {
  options?: any[]
  name: string
}

export const InputText = ({ options, ...props }: InputProps) => {
  const [field, meta] = useField(props)
  return (
    <>
      <input
        type='text'
        {...field}
        {...props}
        style={{ width: '100%' }}
        className='inline-block px-2 py-2 bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
      />
      {meta.touched && meta.error ? (
        <span className=' text-sm text-red-500 mt-[4px]'>{meta.error}</span>
      ) : null}
    </>
  )
}

export const InputSelect = ({ options, ...props }: InputProps) => {
  const [field, meta] = useField(props)
  return (
    <>
      <select
        {...field}
        style={{ width: '100%' }}
        className={
          'inline-block p-[10px] bg-white border border-gray-300  focus:outline-none focus:border-blue-500'
        }
        {...props}
      >
        <option className='text-tcolor'>Select option</option>
        {options?.map((option, index) => (
          <option key={index} value={option?.id}>
            {option?.name}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <span className=' text-sm text-red-500 mt-[4px]'>{meta.error}</span>
      ) : null}
    </>
  )
}
