export function loadCategories() {
    return (dispatch) => {
        fetch("https://run.mocky.io/v3/08e5f669-a16f-4b48-83f7-03430b81c3d4").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
            console.log(res);
            dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
        })
    }
}

function categoriesReducer(state = {
    categories: []
}, action) { 
    switch (action.type) {
        case "LOAD_CATEGORIES_DONE": {
            return {
                ...state,
                categories: action.payload
            }
        }
        default:
            return state;
    }
}

export default categoriesReducer;
