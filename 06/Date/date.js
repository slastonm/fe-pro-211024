let nowDate = new Date();
console.log(nowDate);
// new Date(year, month, day, hours, minutes, seconds, ms)
// Вказується місяць від 0 до 11, де:
// 0 - січень
// 1 - лютий
// 2 - березень
// 3 - квітень
// 4 - травень
// 5 - червень
// 6 - липень
// 7 - серпень
// 8 - вересень
// 9 - жовтень
// 10 - листопад
// 11 - грудень

// hours 0-23
// minutes 0-59
// seconds 0-59
// ms 0-999

let firstMonthPaste = new Date(2000, 0, 1, 0);
console.log(firstMonthPaste);

console.log(nowDate.getDate()); // Day
console.log(nowDate.getDay());// Day number Wensday -> 3
console.log(nowDate.getFullYear()); // Year
console.log(nowDate.getMonth());// Month
console.log(nowDate.getHours());// Hours
console.log(nowDate.getMinutes());// minutes
console.log(nowDate.getSeconds());// Seconds
// Format
console.log(nowDate.toJSON());
console.log(nowDate.toDateString());
console.log(nowDate.toLocaleDateString());
console.log(nowDate.toUTCString());


