import './styles/Global.css';
import StepIndicator from './components/stepIndicator';
import FormContainer from './components/formContainer';
import Buttons from './components/buttons';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { NextPage } from './redux/ActionCreators';

function App() {
  const stepper = useSelector((state: any) => state.stepper);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const dispatcher = useDispatch();

  return (
    <div className="relative w-full z-[1] h-screen flex flex-col justify-center bg-secondary3">
      <div className="flex py-8 px-4 mx-4 md:p-4 h-fit md:h-[600px] bg-secondary5 md:mx-auto rounded-xl shadow-xl">
        <StepIndicator />
        <form onSubmit={handleSubmit(() => { dispatcher(NextPage()) })} className="md:px-6 w-full md:w-fit lg:px-[100px] flex flex-col">
          <FormContainer validator={{ register, errors, handleSubmit }} />
          {
            stepper < 4 && <Buttons />
          }
        </form>
      </div>
    </div>
  )
}

export default App