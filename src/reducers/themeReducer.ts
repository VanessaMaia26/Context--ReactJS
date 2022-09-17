import { reducerActionType } from "../types/reducerActiontype";

export type ThemeType = {
    status: 'dark' | 'light';
}

export const Themeinitialstate: ThemeType = {
    status:"light"
}

export const userReducer = (state: ThemeType, action: reducerActionType ) => {
    switch(action.type) {
        case 'STATUS':
            return {...state, status: action.payload.status};
        break;
    }

    return state;
}