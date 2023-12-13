import { useSelector } from 'react-redux'
import Step from './ui/step'

const StepIndicator = () => {

  const stepper = useSelector((state: any) => state.stepper);

  const Steps = <>
    <Step number="1" selected={stepper === 0} name="YOUR INFO" />
    <Step number="2" selected={stepper === 1} name="SELECT PLAN" />
    <Step number="3" selected={stepper === 2} name="ADD-ONS" />
    <Step number="4" selected={stepper === 3} name="SUMMARY" />
  </>

  return (
    <>
      <div className="hidden md:block pc-bg h-full w-[274px] pt-10 px-8">
        <div className="flex md:flex-col gap-8">
          {Steps}
        </div>
      </div>
      <div className="mobile-bg z-[-1] bg-cover absolute flex justify-center top-0 md:hidden h-[172px] w-screen left-0 pt-10 px-8">
        <div className="flex md:flex-col gap-8">
          {Steps}
        </div>
      </div>
    </>
  )
}

export default StepIndicator
