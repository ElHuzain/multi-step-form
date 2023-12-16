
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

  const getTitle = () => {
    switch(stepper) {
      case 0: return {
        title: "Personal info",
        description: "Please provide your name, email address, and phone number.",
      };
      case 1: return {
        title: "Select your plan",
        description: "You have the option of monthly or yearly billing.",
      };
      case 2: return {
        title: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience.",
      };
      case 3: return {
        title: "Finishing up",
        description: "Double-check everything looks OK before comfirming.",
      };
    }
  }

  return (
    <div className="py-4 w-full md:w-[450px] space-y-9 pt-4">
      <div>
        {
          stepper != 4 && <>
            <h1 className="text-[2rem] font-bold text-primary1">{getTitle()?.title}</h1>
            <p className="text-secondary1">{getTitle()?.description}</p>
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