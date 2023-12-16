import { useValidateEmail, useValidateName, useValidatePhoneNumber } from "@/hooks/useValidate";

// Page Navigation
export const SetPageReducer = (state: any, payload: number) => { return { ...state, stepper: payload,  } };
export const PreviousPageReducer = (state: any) => { return { ...state, stepper: state.stepper - 1, swipe: 'previous' } };
export const NextPageReducer = (state: any) => { return { ...state, stepper: state.stepper + 1, swipe: 'next' } };

// Select addon
export const SelectAddonReducer = (state: any, payload: any) => {
    const newAddons = state.addons.map((item: any) => {
        if (item.name.toLowerCase() === payload) return { ...item, selected: !item.selected };
        return item
    })

    return {
        ...state,
        addons: newAddons
    }
}

// Select plan
type planType = string
export const SelectPlan = (payload: planType) => { return { type: 'SELECT_PLAN', payload: payload } }
export const SelectPlanReducer = (state: any, payload: string) => {

    return {
        ...state,
        plan: {
            ...state.plan,
            selected: payload
        }
    }
}

// Update Plan Type
export const UpdatePlanTypeReducer = (state: any) => {
    const newPlanType = state.planType === 'monthly' ? 'yearly' : 'monthly'

    return {
        ...state,
        planType: newPlanType
    }
}

export const UpdatePersonalInfoReducer = (state: any, payload: any) => {
    const newPersonalInfo = state.personalInfo.map((item: any) => {
        if (item.name.toLowerCase() === payload.field.toLowerCase()) return {
            ...item,
            value: payload.value
        }
        else return item
    })

    return {
        ...state,
        personalInfo: newPersonalInfo
    }
}

export const ValidatePersonalInfoReducer = (state: any) => {
    const nameValidate = useValidateName(state.personalInfo[0].value);
    const emailValidate = useValidateEmail(state.personalInfo[1].value)
    const phoneValidate = useValidatePhoneNumber(state.personalInfo[2].value)
    if (!nameValidate.result) return isError("name", nameValidate, state)
    if (!emailValidate.result) return isError("email", emailValidate, state)
    if (!phoneValidate.result) return isError("phone", phoneValidate, state)

    return {
        ...state,
        stepper: state.stepper + 1
    }
}

const isError = (field: any, validator: any, state: any) => {
    if (validator) {
        const newPersonalInfo = state.personalInfo.map((item: any) => {
            if (item.name.toLowerCase() === field) return {
                ...item,
                error: validator.message
            }
            else return item
        })

        return {
            ...state,
            personalInfo: newPersonalInfo
        }
    }
}