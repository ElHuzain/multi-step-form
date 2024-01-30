import AnimatedContainer from './ui/animatedcontainer';
import Input from './ui/input'

type Props = {
  validator: any
}

const PersonalForm = (props: Props) => {
  const { validator } = props;

  return (
    <AnimatedContainer>

      <div className="space-y-6 z-100">
        <Input
          validator={validator}
          name="Name"
          placeholder="Ahmed Huzain"
        />
        <Input
          validator={validator}
          name="Email Address"
          placeholder="a.huzain98@gmail.com"
          isEmail={true}
          />
        <Input
          validator={validator}
          name="Phone Number"
          placeholder="+20 112679 8092"
          isPhone={true}
        />
      </div>

    </AnimatedContainer>
  )
}

export default PersonalForm