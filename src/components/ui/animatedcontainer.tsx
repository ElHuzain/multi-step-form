import { animated, useSpring } from '@react-spring/web'
import { useSelector } from 'react-redux';

const AnimatedContainer = (props: any) => {
    const { children } = props;
    const swipe = useSelector((val: any) => val.swipe);
    const offSet = 50;
    console.log(swipe);

    const springs = useSpring({
        from: { x: swipe === 'next' ? offSet : offSet * -1, opacity: 0 },
        to: { x: 0, opacity: 1 },
    })

    return (
        <animated.div
            style={{
                ...springs
            }}
        >
            {children}
        </animated.div>
    )
}

export default AnimatedContainer
