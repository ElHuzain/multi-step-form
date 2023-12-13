import { createStore } from 'redux';
import { NextPageReducer, PreviousPageReducer, SelectAddonReducer, SelectPlanReducer, SetPageReducer, UpdatePlanTypeReducer, UpdatePersonalInfoReducer, ValidatePersonalInfoReducer } from './ReducerFns';
import { ActionType, init_state } from './InitialState';

const reducer = (state = init_state, action: ActionType) => {
    switch (action.type) {
        case 'NEXT_PAGE': return NextPageReducer(state);
        case 'PREVIOUS_PAGE': return PreviousPageReducer(state);
        case 'SET_PAGE': return SetPageReducer(state, action.payload);
        case 'SELECT_ADDON': return SelectAddonReducer(state, action.payload);
        case 'SELECT_PLAN': return SelectPlanReducer(state, action.payload);
        case 'UPDATE_PLAN_TYPE': return UpdatePlanTypeReducer(state);
        case 'UPDATE_PERSONAL_INFO': return UpdatePersonalInfoReducer(state, action.payload);
        case 'VALIDATE_PERSONAL_INFO': return ValidatePersonalInfoReducer(state);
        default: return state;
    }
}

const store = createStore(reducer);

export default store;