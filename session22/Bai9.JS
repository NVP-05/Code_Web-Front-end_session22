function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  function getDaysInMonth(month, year) {
    switch (month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31;
      case 4: case 6: case 9: case 11:
        return 30;
      case 2:
        return isLeapYear(year) ? 29 : 28;
      default:
        return -1;
    }
  }
  function checkMonthAndYear() {
    const inputMonth = prompt("Nhập tháng (1-12): ");
    const inputYear = prompt("Nhập năm: ");
  
    const month = parseInt(inputMonth);
    const year = parseInt(inputYear);
    if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
      console.log("Giá trị nhập vào không hợp lệ.");
      return;
    }
    const daysInMonth = getDaysInMonth(month, year);
  
    if (daysInMonth === -1) {
      console.log("Tháng không hợp lệ.");
    } else {
      console.log(`Tháng ${month} năm ${year} có ${daysInMonth} ngày.`);
    }
  }
  checkMonthAndYear();