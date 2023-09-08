import { FC, ReactElement } from 'react'
import okImage from '../../../../assets/images/ok.png'
import { planDataInterface } from '../../../../state/slices/services.slice'

type PlansProps = {
  handleCheckboxChange: (value: number) => void
  handlePlanSelect: (index: number) => void
  titles: string[]
  selectedPlanIndex: number | null
  index: number
  planData: planDataInterface
}

const Plans: FC<PlansProps> = ({
  handleCheckboxChange,
  handlePlanSelect,
  titles,
  selectedPlanIndex,
  index,
  planData,
}): ReactElement => {
  return (
    <div
      className={`w-[100%] p-[20px] border ${
        index === (selectedPlanIndex || planData?.plan_id)
          ? 'border-hblue'
          : 'border-mycloror-600'
      } mb-[20px] rounded-md`}
      onClick={() => handlePlanSelect(index)}
    >
      <div className='flex justify-between'>
        <div>
          <p className='font-bold lg:text-lg text-black text-base'>
            {titles[0]}
          </p>
          <p className='lg:text-base text-tcolor text-base mt-[15px]'>
            {titles[1]}
          </p>
        </div>
        <div>
          {/* <CheckBox
            onChange={handleCheckboxChange}
            checked={index === selectedPlanIndex && isChecked}
            className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
          /> */}
          <input
            type='checkbox'
            onChange={() => handleCheckboxChange(index)}
            checked={index === (selectedPlanIndex || planData?.plan_id)}
            className={`lg:h-5 lg:w-5 h-4 w-4 accent-black`}
          />
        </div>
      </div>
      <div className='mt-[15px]'>
        <p className='text-hblue font-semibold text-xl'>{titles[2]}</p>
      </div>
      <div className='border-t border-navactive-400 mt-[20px] mb-[20px] lg:mt-[40px] lg:mb-[40px]'></div>
      <div className='flex flex-row mb-[15px] items-center '>
        <img src={okImage} alt='okImage' />
        <p className='pl-[20px] font-semibold'>{titles[3]}</p>
      </div>
      <div className='flex flex-row mb-[15px] items-center '>
        <img src={okImage} alt='okImage' />
        <p className='pl-[20px] font-semibold'>{titles[4]}</p>
      </div>
      <div className='flex flex-row mb-[15px] items-center'>
        <img src={okImage} alt='okImage' />
        <p className='pl-[20px] font-semibold'>{titles[5]}</p>
      </div>
      <div className='flex flex-row mb-[15px] items-center'>
        <img src={okImage} alt='okImage' />
        <p className='pl-[20px] font-semibold'>{titles[6]}</p>
      </div>
    </div>
  )
}

export default Plans
