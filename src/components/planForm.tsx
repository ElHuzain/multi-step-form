// Hooks
import useCalculatePrice from '@/hooks/useCalculatePrice';

// Redux
import { useSelector } from 'react-redux'

// Component Imports
import Select from './ui/select'
import RadioButton from './ui/radiobutton'
import AnimatedContainer from './ui/animatedcontainer';

const PlanForm = () => {
  const data = useSelector((state: any) => state.plan);
  const { selected, plans } = data;

  return (
    <AnimatedContainer>
      <div className="space-y-6">
        <div className="flex gap-4 flex-col md:flex-row justify-between">
          {
            plans.map((item: any, index: number) => <Select
              key={index}
              selected={selected === item.name.toLowerCase()} name={item.name}
              icon={item.name.toLowerCase()}
              price={useCalculatePrice(item.price)}
            />)
          }
        </div>
        <RadioButton />
      </div>
    </AnimatedContainer>
  )
}

export default PlanForm