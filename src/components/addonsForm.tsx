// Hooks
import useCalculatePrice from '@/hooks/useCalculatePrice';

// Redux
import { useSelector } from 'react-redux';

// Component imports
import CheckBox from './ui/checkbox'

const AddonsForm = () => {
  const data = useSelector((state: any) => state.addons);

  return (
    <div className="space-y-4">
      {
        data.map((item: any, index: number) => <CheckBox
          key={index}
          name={item.name}
          feature={item.feature}
          price={useCalculatePrice(item.price)}
          selected={item.selected}
        />)
      }
    </div>
  )
}

export default AddonsForm