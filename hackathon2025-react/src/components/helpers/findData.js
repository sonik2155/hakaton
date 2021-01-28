 const getData = (items) => {
    const data = {
      author: '',
      text: ''
    }
    if (!items || !items[0]) {
      return data
    }
    data.author = items[0].fileds
    data.text = items[0].fileds
    return data
  };
  export default getData;