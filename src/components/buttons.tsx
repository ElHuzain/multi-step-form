import { NextPage, PreviousPage } from '@/redux/ActionCreators'
import { GoBackButton, NextButton, ConfirmButton } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'


const Buttons = () => {
  const stepper = useSelector((state: any) => state.stepper);
  const dispatcher = useDispatch();

  return (
    <div className="absolute md:relative w-screen bottom-0 left-0 p-4 bg-secondary4 md:bg-secondary5 md:p-0 md:w-full flex justify-between items-center mt-auto h-fit pb-4">
      {
        stepper > 0 ? <GoBackButton click={() => dispatcher(PreviousPage())} /> : <div></div>
      }
      {
        stepper === 3 ? <ConfirmButton click={() => dispatcher(NextPage())} />
          : <NextButton click={() => {}} />
      }
    </div>
  )
}

export default Buttons