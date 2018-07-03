export default (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIES_BY_TITLE':
          return action.payload;
        default:
            return state;
    }
};