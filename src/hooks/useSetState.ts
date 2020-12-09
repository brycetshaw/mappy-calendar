import React, { useReducer } from 'react';

const reducer = (previousState = {}, updatedState = {}) => {
    return { ...previousState, ...updatedState };
};

const useSetState = <T>(initialState: T) => {
    const [state, dispatch] = useReducer(reducer, initialState) as [any, React.Dispatch<T>];

    const setState = (updatedState: T) => dispatch(updatedState);

    return [state, setState];
};

export default useSetState;