import { createContext, useReducer } from 'react';
import { UserType, userInitialState, userReducer} from '../reducers/userReducer';
import { ThemeType, themeInitialState, themeReducer} from '../reducers/themeReducer';
import { reducerActionType } from '../types/reducerActiontype';

type initialStateType = {
    user: UserType;
    theme: ThemeType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState,
    Theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = ({ user: initialStateType }, action: reducerActionType) => ({
    user: userReducer(state.user, action)
    theme: themeReducer(state.theme, action)
});

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, userInitialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    );
}