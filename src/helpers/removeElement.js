const removeElement = (e, index, elementArr, setElementArr, placeHolder, idx) =>
{
    e.preventDefault();

      let newArr = [...elementArr];
      newArr.splice(index, 1);

      clearByKey(placeHolder, idx)
      setElementArr(newArr);
}

const clearByKey = (type, idx) => {
  Object.keys(localStorage).forEach(key => {
      if (key.indexOf(`${type}_${idx}_`) !== -1) {
          localStorage.removeItem(key)
      }
  })
}

export default removeElement;