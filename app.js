function reverseStr(str) {
    var newStr = str.split('');
    var strList = newStr.reverse().join('');
    return strList;
}

function checkPalindrome(str) {
    return (str === reverseStr(str));
}

function convertDateToStr(date) {
    var dateStr = {
        day: '',
        month: '',
        year: ''
    };
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    }
    else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    }
    else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}

function getAllDateFormats(date) {
    var dayStr = convertDateToStr(date);
    var ddmmyyyy = dayStr.day + dayStr.month + dayStr.year;
    var mmddyyyy = dayStr.month + dayStr.day + dayStr.year;
    var yyyymmdd = dayStr.year + dayStr.month + dayStr.day;
    var ddmmyy = dayStr.day + dayStr.month + dayStr.year.slice(-2);
    var mmddyy = dayStr.month + dayStr.day + dayStr.year.slice(-2);
    var yymmdd = dayStr.year.slice(-2) + dayStr.month + dayStr.day;
    var listOfAll = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    return listOfAll;
}

function checkPalindromeForAll(date) {
    var listDate = getAllDateFormats(date);
    var flag = false;
    for (i = 0; i < listDate.length; i++) {
        if (checkPalindrome(listDate[i])) {
            flag = true;
            // console.log(listDate[i])
            break;
        }
    }
    return flag;
}

function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function getNextDate(date) {
    var day = date.day;
    var month = date.month;
    var year = date.year;
    day = day + 1
    var daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2) {
        //  february
        if (leapYear(year)) {
            // leapYear
            if (day > 29) {
                day = 1;
                month++;
            }

        } else {
            if (day > 28) {
                day = 1;
                month++;
            }

        }

    } else {
        //  rest of the month
        if (day > daysMonth[month - 1]) {
            day = 1;
            month++
        }

    }
    if (month === 13) {
        year++;
        day = 1;
        month = 1;
    }
    return {
        day: day,
        month: month,
        year: year
    };
}

function getNextPalindromeDate(date) {
    var newDate = getNextDate(date)
    var counter = 0;
    while (1) {
        counter++;
        var palDate = checkPalindromeForAll(newDate);
        if (palDate) {
            break;
        }
        newDate = getNextDate(newDate);
    }
    return [counter, newDate];
}

function getPreviousDate(date) {
    var day = date.day;
    var month = date.month;
    var year = date.year;
    day = day - 1;
    var daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 3) {
        // march to february
        if (leapYear(year)) {
            if (day < 1) {
                // leapYear
                day = 29;
                month--;
            }

        } else {
            if (day < 1) {
                //  march 1 to feb 28 not a leap year
                day = 28;
                month--;
            }
        }

    } else {
        //  rest of the month
        if (day < 1) {
            // first day of this month to last day of previous month
            month--;
            day = daysMonth[month - 1];
        }

    }
    if (month < 1) {
        year--;
        day = 31;
        month = 12;
    }
    return {
        day: day,
        month: month,
        year: year
    };
}

function getPreviousPalindromeDate(date) {
    var newDate = getPreviousDate(date)
    var counter = 0;
    while (1) {
        counter++;
        var palDate = checkPalindromeForAll(newDate);
        if (palDate) {
            break;
        }
        newDate = getPreviousDate(newDate);
    }
    return [counter, newDate];
}