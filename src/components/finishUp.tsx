// Hooks
import useCalculateFinalPrice from "@/hooks/useCalculateFinalPrice";
import useCalculatePrice from "@/hooks/useCalculatePrice";
import AnimatedContainer from "./ui/animatedcontainer";
import { useDispatch } from "react-redux";
import { SetPage } from "@/redux/ActionCreators";

const FinishUp = () => {
  const data = useCalculateFinalPrice();
  const { selectedPlan, selectedAddons, planType, finalPrice } = data;

  const dispatcher = useDispatch();
  const clickHandler = () => dispatcher(SetPage(1))

  return (
    <AnimatedContainer>
      <div className="rounded-xl px-6 py-4 bg-secondary4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-primary1">
            {selectedPlan.name} ({planType})<br />
            <button onClick={clickHandler} className="underline text-sm text-secondary1">Change</button>
          </h2>
          <span className="font-bold text-primary1">${useCalculatePrice(selectedPlan.price)}/mo</span>
        </div>
        <hr />
        <div className="space-y-4">
          {selectedAddons.map((item: any, index: number) => <span key={index} className="flex justify-between items-center">
            <span className="text-sm text-secondary1">{item.name}</span>
            <span className="text-sm text-primary1">+${useCalculatePrice(item.price)}/mo</span>
          </span>
          )}
        </div>
      </div>
      <div className="w-full flex px-6 py-4 items-center justify-between">
        <h2 className="text-sm text-secondary1">Total (per month)</h2>
        <span className="font-bold text-primary1">+${finalPrice}/mo</span>
      </div>
    </AnimatedContainer>
  )
}

export default FinishUp