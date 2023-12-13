import { SelectAddon } from "@/redux/ActionCreators";
import { useDispatch } from "react-redux";

type Props = {
    name: string,
    feature: string,
    price: number,
    selected: boolean
}

const Check = () => <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4L4.43298 7.43298L10.866 1" stroke="white" strokeWidth="2" />
</svg>

const CheckBox = (props: Props) => {
    const { name, feature, price, selected } = props;

    const dispatcher = useDispatch();

    const SelectContainerStyle = "px-4 md:px-6 py-5 flex justify-between rounded-lg cursor-pointer border-[1px] hover:border-primary2 border-secondary1 items-center w-full";
    const SelectedContainerStyle = "px-4 md:px-6 py-5 flex justify-between rounded-lg cursor-pointer border-[1px] hover:border-primary2 bg-secondary4 border-primary2 items-center w-full";

    const InputStyle = "w-5 aspect-square ring-2 ring-secondary2 rounded-[4px]";
    const SelectedInputStyle = "w-5 flex flex-col justify-center aspect-square bg-primary2 rounded-[4px]";

    return (
        <div onClick={() => dispatcher(SelectAddon(name.toLowerCase()))} className={selected ? SelectedContainerStyle : SelectContainerStyle}>
            <div className="flex gap-4 md:gap-6 items-center">
                <div className={selected ? SelectedInputStyle : InputStyle}>
                    <div className="w-fit mx-auto">
                        {selected && <Check />}
                    </div>
                </div>
                {/* <input checked={selected} className="" type="checkbox" /> */}
                <h1 className="font-semibold text-primary1 leading-[24px]">{name}<br /><span className="text-sm font-[400] text-secondary1" >{feature}</span></h1>
            </div>
            <span className="text-primary2 text-sm">+${price}/mo</span>
        </div>
    )
}

export default CheckBox