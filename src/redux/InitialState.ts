type personalInfoType = {
    name: string,
    placeholder: string,
    error: string,
    value: string
}

type planType = {
    name: string,
    price: number
}

type addonType = {
    name: string,
    feature: string,
    price: number,
    selected: boolean
}

type StateType = {
    personalInfo: personalInfoType[],
    plan: {
        selected: string,
        plans: planType[]
    },
    planType: string,
    addons: addonType[],
    stepper: number
}

export type ActionType = {
    type: string,
    payload: any,
}

// Let's just assume that this is data coming from an API, ok?
export const init_state: StateType = {
    personalInfo: [
        {
            name: "Name",
            value: "",
            placeholder: "Ahmed Huzain",
            error: "",
        },
        {
            name: "Email Address",
            value: "",
            placeholder: "a.huzain98@gmail.com",
            error: "",
        },
        {
            name: "Phone Number",
            value: "",
            placeholder: "+20 112679 8092",
            error: "",
        },
    ],
    
    planType: 'yearly',
    plan: {
        selected: 'arcade',
        plans: [
            {
                name: 'Arcade',
                price: 9
            },
            {
                name: 'Advanced',
                price: 12
            },
            {
                name: 'Pro',
                price: 15
            }
        ],
    },
    addons: [
        {
            name: 'Online Service',
            feature: 'Access to multiplayer games',
            price: 1,
            selected: false,
        },
        {
            name: 'Larger storage',
            feature: 'Extra 1TB of cloud save',
            price: 2,
            selected: false,
        },
        {
            name: 'Customizable Profile',
            feature: 'Custom theme on your profile',
            price: 2,
            selected: false
        },
    ],
    stepper: 0
}