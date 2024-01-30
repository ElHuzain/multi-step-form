type Props = {
    name: string,
    placeholder: string,
    // error?: string,
    // value: string,
    validator: { register: any, errors: any }
    isEmail?: boolean
    isPhone?: boolean
}

const Input = (props: Props) => {
    const { name, placeholder, validator, isEmail = false, isPhone = false } = props;
    const InputStyle = "bg-unset focus:outline-primary2 text-primary1 font-[600] border-[1px] border-secondary2 w-full rounded-lg p-3 placeholder:text-secondary1 placeholder:font-[500]";
    const ErroredInputStyle = `bg-unset focus:outline-primary2 text-primary1 font-[600] border-[1px] w-full rounded-lg p-3 placeholder:text-secondary1 placeholder:font-[500] border-primary5`;

    const InputName = name.split(" ")[0].toLowerCase()

    const additionalConstraints = isEmail ?
        { pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, } }
        : isPhone
            ? { pattern: { value: /^[0-9]{5,}$/, } }
            : null

    return (
        <div className="space-y-1">
            <div className="justify-between flex items-center relative">
                <label htmlFor={InputName} className="font-[400] text-primary1">{name}</label>
                <span className="font-[500] absolute right-0 text-sm text-primary5">{validator.errors[InputName]?.type === "required" && "This field is required"}</span>
                {
                    isEmail && <span className="font-[500] text-sm text-primary5">{validator.errors[InputName]?.type === "pattern" && "Please enter a valid email"}</span>
                }
                {
                    isPhone && <span className="font-[500] text-sm text-primary5">{validator.errors[InputName]?.type === "pattern" && "Please enter a valid number"}</span>
                }
            </div>
            <input id={InputName} {...validator.register(InputName, { required: true, ...additionalConstraints })} className={validator.errors[InputName]?.type === "required" ? ErroredInputStyle : InputStyle} placeholder={`e.g. ${placeholder}`} />
        </div>
    )
}

export default Input