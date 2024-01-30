import { SelectPlan } from "@/redux/ActionCreators";
import { useDispatch } from "react-redux";

type Props = {
    icon: string,
    name: string,
    price: number,
    selected?: boolean
}

const Select = (props: Props) => {
    const { icon, name, price, selected = false } = props;

    const dispatcher = useDispatch();

    const SelectStyle = "md:h-[160px] gap-4 w-full md:max-w-[138px] rounded-lg cursor-pointer hover:border-primary2 border-[1px] border-secondary2 px-4 py-5 flex md:flex-col justify-between";
    const SelectedSelectStyle = `md:h-[160px] gap-4 w-full md:max-w-[138px] rounded-lg cursor-pointer hover:border-primary2 border-[1px] px-4 py-5 flex md:flex-col justify-between border-primary2 bg-secondary4`

    return (
        <div onClick={() => dispatcher(SelectPlan(name.toLowerCase()))} className={selected ? SelectedSelectStyle : SelectStyle}>
            <img aria-hidden='true' alt='selection icon' className="w-[40px]" src={`./images/icon-${icon}.svg`} />
            <h2 className="font-semibold text-primary1 leading-[20px] mr-auto">{name} <br /><span className="text-secondary1 font-[400] text-sm">${price}/mo</span></h2>
        </div>
    )
}

export default Select