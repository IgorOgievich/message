export const saveState = (key, state) => {
    localStorage.setItem("our-state" + key, JSON.stringify(state));
};

export const restoreState = (key, defaultState) => {
    let stateAsString = localStorage.getItem("our-state" + key);
    if (stateAsString) {
        defaultState = JSON.parse(stateAsString);
    }
    return defaultState
};
