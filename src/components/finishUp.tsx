// Hooks
import useCalculateFinalPrice from "@/hooks/useCalculateFinalPrice";
import useCalculatePrice from "@/hooks/useCalculatePrice";

const FinishUp = () => {
  const data = useCalculateFinalPrice();
  const { selectedPlan, selectedAddons, planType, finalPrice } = data;

  return (
    <div className="">
      <div className="rounded-xl px-6 py-4 bg-secondary4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-primary1">
            {selectedPlan.name} ({planType})<br />
            <span className="underline text-sm text-secondary1">Change</span>
          </h1>
          <h1 className="font-bold text-primary1">${useCalculatePrice(selectedPlan.price)}/mo</h1>
        </div>
        <hr />
        <div className="space-y-4">
          {selectedAddons.map((item: any, index: number) => <h1 key={index} className="flex justify-between items-center">
            <span className="text-sm text-secondary1">{item.name}</span>
            <span className="text-sm text-primary1">+${useCalculatePrice(item.price)}/mo</span>
          </h1>
          )}
        </div>
      </div>
      <div className="w-full flex px-6 py-4 items-center justify-between">
        <h1 className="text-sm text-secondary1">Total (per month)</h1>
        <h1 className="font-bold text-primary1">+${finalPrice}/mo</h1>
      </div>
    </div>
  )
}

export default FinishUp