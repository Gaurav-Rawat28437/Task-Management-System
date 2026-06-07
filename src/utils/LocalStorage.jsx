export const loadState = () => {
    try {
        const state = localStorage.getItem("reduxState")
        if (state === null) {
            return undefined
        }

        return JSON.parse(state)
    }
    catch (error) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        localStorage.setItem("reduxState", JSON.stringify(state));
    } 
    catch(error) {
        console.log(error);
    }
}

