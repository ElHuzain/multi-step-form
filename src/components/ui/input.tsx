type Props = {
    name: string,
    placeholder: string,
    // error?: string,
    // value: string,
    validator: { register: any, errors: any }
}

const Input = (props: Props) => {
    const { name, placeholder, validator } = props;
    const InputStyle = "bg-unset focus:outline-primary2 text-primary1 font-[600] border-[1px] border-secondary2 w-full rounded-lg p-3 placeholder:text-secondary1 placeholder:font-[500]";
    const ErroredInputStyle = `bg-unset focus:outline-primary2 text-primary1 font-[600] border-[1px] w-full rounded-lg p-3 placeholder:text-secondary1 placeholder:font-[500] border-primary5`;

    const InputName = name.split(" ")[0].toLowerCase()

    return (
        <div className="space-y-1">
            <div className="justify-between flex items-center">
                <h1 className="font-[400] text-primary1">{name}</h1>
                <h1 className="font-[500] text-sm text-primary5">{validator.errors[InputName]?.type === "required" && "This field is required"}</h1>
            </div>
            <input {...validator.register(InputName, { required: true })} className={validator.errors[InputName]?.type === "required" ? ErroredInputStyle : InputStyle} placeholder={`e.g. ${placeholder}`} />
        </div>
    )
}

export default Input