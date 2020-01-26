// monthState is our vanilla js way of creating
// a global state value

// initializing monthState by the current time
const initialDate = new Date();
let monthState = new Date(initialDate.getFullYear(), initialDate.getMonth(), 1);

// methods for modifying monthState
const decrementMonth = () => {
  monthState = new Date(monthState.getFullYear(), monthState.getMonth() - 1, 1);
};
const incrementMonth = () => {
  monthState = new Date(monthState.getFullYear(), monthState.getMonth() + 1, 1);
};

/************* Methods for modifying content on page *************/

const generateListItemNode = (index, text = '') => {
  const node = document.createElement('LI');
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  node.classList.add('weekdays__square');
  if (index % 7 === 0 || index % 7 === 6) {
    node.classList.add('weekdays__square--weekend');
  }
  return node;
};

const clearDates = () => {
  // dates could be saved globally, but better to
  // get it again each time due to modularity
  const dates = document.getElementById('dates');
  while (dates.firstChild) {
    dates.removeChild(dates.firstChild);
  }
};

const changeDates = (daysInMonth, startingWeekday) => {
  const dates = document.getElementById('dates');

  clearDates();
  let index = 0;
  let dayOfMonth = 1;
  let node;
  while (startingWeekday > 0) {
    node = generateListItemNode(index);
    dates.appendChild(node);
    index++;
    startingWeekday--;
  }

  while (daysInMonth > 0) {
    node = generateListItemNode(index, dayOfMonth.toString());
    dates.appendChild(node);
    index++;
    dayOfMonth++;
    daysInMonth--;
  }

  while (index % 7 !== 0) {
    node = generateListItemNode(index);
    dates.appendChild(node);
    index++;
  }
};

const changeHeading = (month, year) => {
  // heading could be saved globally, but better to
  // get it again each time due to modularity
  const heading = document.getElementById('month-year');
  heading.innerText = `${month} ${year}`;
};

const getMonthData = (date = null) => {
  // this map is re-initialized on every function call
  // which is not necessary, but I prefer modularity
  // over saving some compute time and memory
  const monthsMap = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  let currentDate;
  if (date === null) {
    currentDate = new Date();
  } else {
    currentDate = new Date(date);
  }
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const startingWeekday = new Date(currentYear, currentMonth - 1).getDay();
  return {
    daysInMonth,
    startingWeekday,
    month: monthsMap[currentMonth],
    year: currentYear,
  };
};

// method activated when clicking buttons
const changeCal = (action = null) => {
  // action is the name of a function
  // either increments or decrements global month state
  if (action !== null) {
    // action will be null on the page init
    action();
  }

  const { daysInMonth, startingWeekday, month, year } = getMonthData(
    monthState,
  );
  changeHeading(month, year);
  changeDates(daysInMonth, startingWeekday);
};

// method to set page init
changeCal();
