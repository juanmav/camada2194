const counterReducer = (previousState = 0, action) => {
    // previousState : 0
    // action : { type: 'INCREMENT'}
    // action : { type: 'DECREMENT'}

    switch (action.type){
        case 'INCREMENT':
            return previousState + 1;
        case 'DECREMENT':
            return previousState - 1;
        default:
            return previousState;
    }

};

export default counterReducer;
