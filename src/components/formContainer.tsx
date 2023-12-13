
// Redux
import { useSelector } from 'react-redux'

// Components
import AddonsForm from './addonsForm'
import FinishUp from './finishUp'
import Finished from './finished'
import PersonalForm from './personalForm'
import PlanForm from './planForm'

type ValidatorType = {
  register: any,
  errors: any,
  handleSubmit: any
}

type Props = {
  validator: ValidatorType
}

const FormContainer = (props: Props) => {
  const { validator } = props;
  const stepper = useSelector((state: any) => state.stepper);

  const getStep = () => {
    switch (stepper) {
      case 0: return <PersonalForm validator={validator} />
      case 1: return <PlanForm />
      case 2: return <AddonsForm />
      case 3: return <FinishUp />
      case 4: return <Finished />
      default: return 0;
    }
  }

  return (
    <div className="py-4 w-full md:max-w-[450px] space-y-9 pt-4">
      <div>
        {
          stepper != 4 && <>
            <h1 className="text-[2rem] font-bold text-primary1">Personal info</h1>
            <p className="text-secondary1">Please provide your name, email address, and phone number.</p>
          </>
        }
      </div>
      <div className="flex w-full flex-col h-full">
        {getStep()}
      </div>
    </div>
  )
}

export default FormContainer