import { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED':
            return { user: action.payload }
        case 'notLOGGED':
            return { user: null };
        default:
            return state;
    }
}

export const UserContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, { user: null });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch({ type: 'LOGGED', payload: user });
        }
    }, [])


    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}