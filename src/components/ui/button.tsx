import { MouseEventHandler } from "react";

type Props = {
    click: MouseEventHandler,
}

export const GoBackButton = (props: Props) => {
    const { click } = props;

    const GhostButtonStyle = "p-0 hover:text-primary1 font-semibold text-secondary1 text-secondary-1 rounded-md bg-transparent";

    return (
        <button type='button' onClick={click} className={GhostButtonStyle}>Go Back</button>
    )
}

export const NextButton = (props: Props) => {
    const { click } = props;
    const ButtonStyle = "px-6 py-3 hover:opacity-80 font-semibold text-secondary5 text-secondary-1 rounded-md bg-primary1";

    return (
        <button onClick={click} className={ButtonStyle}>Next Step</button>
    )
}

export const ConfirmButton = (props: Props) => {
    const { click } = props;
    const ButtonStyle = "px-6 py-3 hover:opacity-80 font-semibold text-secondary5 text-secondary-1 rounded-md bg-primary2";

    return (
        <button onClick={click} className={ButtonStyle}>Confirm</button>
    )
}