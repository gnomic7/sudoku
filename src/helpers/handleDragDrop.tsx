
const handleCellDoubleClick = (e, id) => {
  const input = document.createElement('input');
  input.id = `input-${id}`;
  const target = e.currentTarget;
  const oldVal = +target.innerHTML;
  target.innerHTML = '';
  target.appendChild(input);
  input.style.width='100%';
  input.style.height='80%';
  input.style.font = 'inherit';
  input.focus();
  input.onblur = (e) => handleOnBlur(e,id, oldVal)
}

const handleOnBlur = (e, parentId: string, oldVal: number) => {
  const div = document.getElementById(parentId);
  if (!div) {
    throw new Error(`Missing the correct container`);
  }
  div.innerHTML = e.currentTarget.value || oldVal;
  e.currentTarget.remove();
  div.style.background = 'white';
  const error = computeResult();
  displayError('');
  if (error) {
    div.style.background = '#f50057';
    displayError(error)
  }
}
const isCubeValid = () => {
  
}
const isRowColValid = () => {
  const numbers: Array<number> = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
      const div = document.getElementById(`${i},${j}`);
      if (!div) {
        throw new Error(`Something went wrong!`);
      }
      const val = +div.innerHTML || 0;
      if (numbers.includes(val)) {
        throw new Error(`Oops! ${val} already exists in this row`);
      }
      if (val) numbers.push(val);
    }
    numbers.length = 0;
  }
  // Check column
  for (let i = 1; i <= 9; i++) {
    for (let j = i; j <=9; j++) {
      const div = document.getElementById(`${i},${j}`);
      if (!div) {
        throw new Error(`Something went wrong!`);
      }
      const val = +div.innerHTML || 0;
      if (numbers.includes(val)) {
        throw new Error(`Oops! ${val} already exists in this row`);
      }
      if (val) numbers.push(val);
    }
    numbers.length = 0;
  }
}

const computeResult = () => {
  let error = ``;
  try {
    isCubeValid();
    isRowColValid();

  } catch (err) {
    error = err;;
  } finally {
    return error;
  }
  
}

const displayError = (error) => {
  const hidden = document.getElementById('errorLabel');
  if (!hidden) {
    throw new Error(`Something went wrong!`);
  }
  hidden.style.visibility = 'visible';
  hidden.innerHTML = error;
  if (!error) hidden.style.visibility = 'hidden';
}

const initializeBoard = () => {
  return {
    '1,5': 9,
    '1,7': 8,
    '3,6': 5,
    '9,9': 7
  }
}


export {handleCellDoubleClick, initializeBoard};