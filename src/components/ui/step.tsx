type Props = {
  number: string,
  name: string,
  selected?: boolean
}

const Step = (props: Props) => {
  const { number, name, selected = false } = props;

  const CircleStyle = 'rounded-full transition-[background] w-[33px] aspect-square h-fit flex flex-col justify-center text-center border-[1px] border-secondary1"';
  const SelectedCircle = `${CircleStyle} bg-primary4`;

  const IndicatorNumberStyle = "m-auto text-secondary4 font-bold leading-[1px]"
  const SelectedIndicatorNumberStyle = "m-auto text-primary1 font-bold leading-[1px]"

  return (
    <div className="flex gap-4">
      <div className={selected ? SelectedCircle : CircleStyle}>
        <span className={selected ? SelectedIndicatorNumberStyle : IndicatorNumberStyle}>{number}</span>
      </div>
      <div className="hidden md:block">
      <span className="text-primary3 text-xs font-bold">
        STEP {number}<br />
        <span className="text-secondary4 absolute text-sm tracking-wider">{name}</span>
      </span>
      </div>
    </div>
  )
}

export default Step