const nameMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const numberMonth = new Date().getMonth();
const numDate = new Date().getDate();
const year = new Date().getFullYear();
const dayMonth = nameMonth[numberMonth];
const weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'long'}).format();
const month = new Intl.DateTimeFormat('ru-RU', { month: 'long'}).format();

const date = {
  numDate,
  year,
  dayMonth,
  weekday,
  month,
}

function dayOfMonth(year, month) {
  const date = new Date(year, month, 0);
  const numDate = date.getDate();
  let arrDay = [];
  for (let i = 1; i <= numDate; i++) {
    arrDay.push(i);
  }
  return arrDay;
}

function monthInWeeks() {
  const numMonth = numberMonth + 1;
  const arrCurDays = dayOfMonth(year, numMonth);
  const arrPrevDays = new Date(year, numMonth - 1, 0).getDate();
  const wd = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const weeks = {
    first: [],
    second: [],
    third: [],
    fourth: [],
    fifth: []
  };

  for (let i = 0; i < arrCurDays.length; i++) {
    let firstDayMonth = new Date(year, new Date().getMonth(), arrCurDays[i]);
    let firstDayMonthOfWeek = new Intl.DateTimeFormat("ru-RU", {
      weekday: "short"
    }).format(firstDayMonth);

    if (weeks.first.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.first[index] = arrCurDays[i];
        }
      });
    } else if (weeks.second.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.second[index] = arrCurDays[i];
        }
      });
    } else if (weeks.third.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.third[index] = arrCurDays[i];
        }
      });
    } else if (weeks.fourth.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.fourth[index] = arrCurDays[i];
        }
      });
    } else if (weeks.fifth.length < 7) {
      wd.forEach((e, index) => {
        if (firstDayMonthOfWeek === e) {
          weeks.fifth[index] = arrCurDays[i];
        }
      });
    }
  }

  let prevDay = arrPrevDays;
  for (let i = 6; i >= 0; i -= 1) {
    if (!weeks.first[i]) {
      weeks.first[i] = prevDay;
      prevDay -= 1;
    }
  }

  let count = 0;
  for (let i = 0; i < 7; i++) {
    if (!weeks.fifth[i]) {
      count += 1;
      weeks.fifth[i] = count;
    }
  }

  return weeks;
}

const days = monthInWeeks();


export { date, days };
