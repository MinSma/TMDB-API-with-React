export default (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIES_BY_TITLE':
          return action.payload;
        case 'GET_LATEST_MOVIES':
          return action.payload;
        default:
            return state;
    }
};