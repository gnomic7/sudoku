const handleCellDoubleClick = (e, id) => {
  const input = document.createElement('input');
  input.id = `input-${id}`;
  const target = e.currentTarget;
  const oldVal = +target.innerHTML;
  target.innerHTML = '';
  target.appendChild(input);
  input.style.width = '100%';
  input.style.height = '80%';
  input.style.font = 'inherit';
  input.type = 'number';
  input.title = 'Numbers between 1 and 9';
  input.min = '1';
  input.max = '9';
  input.focus();
  input.onblur = (e) => handleOnBlur(e, id, oldVal);
};

const handleOnBlur = (e, parentId: string, oldVal: number) => {
  const div = document.getElementById(parentId);
  if (!div) {
    throw new Error(`Missing the correct container`);
  }
  const newVal = e.currentTarget.value || oldVal;
  div.innerHTML = newVal || '';
  e.currentTarget.remove();
  div.style.background = 'white';
  const error = computeResult(parentId);
  displayError('');
  if (error) {
    div.style.background = '#f50057';
    displayError(error);
    div.innerHTML = '';
  }
};

const isSquareValid = (id) => {
  let cubes: Array<number> = [];
  const [x, y] = id.split(',');
  const commCords = [1, 4, 7];
  const minCordsX = [...commCords, +x].sort();
  const minCordsY = [...commCords, +y].sort();
  const xMin = minCordsX[minCordsX.lastIndexOf(+x) - 1];
  const yMin = minCordsY[minCordsY.lastIndexOf(+y) - 1];

  const trackSize = 2;
  const xMax = xMin + trackSize;
  const yMax = yMin + trackSize;
  for (let i = xMin; i <= xMax; i++) {
    for (let j = yMin; j <= yMax; j++) {
      const eachSquareDiv = document.getElementById(`${i},${j}`);
      if (!eachSquareDiv) {
        throw new Error(`Something went wrong!`);
      }
      const valSquare = (eachSquareDiv && +eachSquareDiv.innerHTML) || 0;
      if (cubes.includes(valSquare)) {
        throw new Error(
          `Oops! ${valSquare} already exists in this enclosing square`,
        );
      }
      if (valSquare) cubes.push(valSquare);
    }
  }
};

const isRowColValid = (id) => {
  const [x, y] = id.split(',');
  const numbers: {
    cols: Array<number>;
    rows: Array<number>;
  } = {
    cols: [],
    rows: [],
  };

  for (let i = 1; i <= 9; i++) {
    const divCol = document.getElementById(`${x},${i}`);
    const divRow = document.getElementById(`${i},${y}`);
    if (!divCol || !divRow) {
      throw new Error(`Something went wrong!`);
    }
    const valCol = +divCol.innerHTML || 0;
    const valRow = +divRow.innerHTML || 0;
    if (numbers.rows.includes(valRow)) {
      throw new Error(`Oops! ${valRow} already exists in that row`);
    }
    if (numbers.cols.includes(valCol)) {
      throw new Error(`Oops! ${valCol} already exists in that column`);
    }
    if (valRow) numbers.rows.push(valRow);
    if (valCol) numbers.cols.push(valCol);
  }
};

const computeResult = (id) => {
  let error = ``;
  try {
    isSquareValid(id);
    isRowColValid(id);
  } catch (err) {
    error = err;
  }
  return error;
};

const displayError = (error) => {
  const hidden = document.getElementById('errorLabel');
  if (!hidden) {
    throw new Error(`Something went wrong!`);
  }
  hidden.style.visibility = 'visible';
  hidden.innerHTML = error;
  if (!error) hidden.style.visibility = 'hidden';
};

const initializeBoard = () => {
  return {
    '1,5': 9,
    '1,7': 8,
    '3,6': 5,
    '9,9': 7,
  };
};

export { handleCellDoubleClick, initializeBoard };
