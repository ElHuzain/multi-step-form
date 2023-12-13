import { UpdatePlanType } from "@/redux/ActionCreators";
import { useDispatch, useSelector } from "react-redux";

const RadioButton = () => {

    const planType = useSelector((state: any) => state.planType);
    const dispatcher = useDispatch();

    const TextStyle = "font-[600] text-sm cursor-pointer text-secondary1";
    const SelectedTextStyle = "font-[600] text-sm cursor-default text-primary1";

    const RadioButtonStyle = `absolute w-[15px] transition-all ${planType === 'monthly' ? "right-auto left-1" : "right-1 left-auto"} aspect-square bg-secondary4 rounded-full`;
    return (
        <div className="w-full rounded-xl py-8 justify-center flex gap-5 items-center bg-secondary4 h-12">
            <h1 onClick={() => { planType === 'monthly' ? "" : dispatcher(UpdatePlanType()) }} className={planType === 'monthly' ? SelectedTextStyle : TextStyle}>Monthly</h1>
            <div onClick={() => { dispatcher(UpdatePlanType()) }} className="w-12 transition-all flex relative cursor-pointer rounded-full h-6 p-1 bg-primary1">
                <div className={RadioButtonStyle}></div>
            </div>
            <h1 onClick={() => { planType === 'yearly' ? "" : dispatcher(UpdatePlanType()) }} className={planType === 'yearly' ? SelectedTextStyle : TextStyle}>Yearly</h1>
        </div>
    )
}

export default RadioButton
