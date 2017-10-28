function reducer(state = {
  text: '你好，访问者',
  name: '访问者'
}, action) {
  switch (action.type) {
    case 'changeInputValue':
      return {
        name: action.payload,
        text: '你好，' + action.payload
      };
    default:
      return state;
  }
}

export default reducer;
