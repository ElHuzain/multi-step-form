// Stepper Actions
type stepperType = number;
export const NextPage = () => { return { type: 'NEXT_PAGE' } };
export const PreviousPage = () => { return { type: 'PREVIOUS_PAGE' } };
export const SetPage = (payload: stepperType) => { return { type: 'SET_PAGE', payload: payload } };

// Select addon
type AddonType = string
export const SelectAddon = (payload: AddonType) => { return { type: 'SELECT_ADDON', payload: payload } }

// Select plan
type planType = string
export const SelectPlan = (payload: planType) => { return { type: 'SELECT_PLAN', payload: payload } }

// Update personal info
export const UpdatePersonalInfo = (field: string, value: string) => { return { type: 'UPDATE_PERSONAL_INFO', payload: { field: field, value: value } } }

// Validate personal info
export const ValidatePersonalInfo = () => { return { type: 'VALIDATE_PERSONAL_INFO' } };

// Switches plan type
export const UpdatePlanType = () => { return { type: 'UPDATE_PLAN_TYPE' } }