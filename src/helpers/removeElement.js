const removeElement = (e, index, elementArr, setElementArr) =>
{
    e.preventDefault();

      let newArr = [...elementArr];
      newArr.splice(index, 1);

      setElementArr(newArr);
}

export default removeElement;