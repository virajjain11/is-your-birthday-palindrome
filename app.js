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

  function getAllDateFormats(date){
    var dayStr = convertDateToStr(date);
    var ddmmyyyy = dayStr.day + dayStr.month + dayStr.year;
    var mmddyyyy = dayStr.month+ dayStr.day + dayStr.year ;
    var yyyymmdd = dayStr.year + dayStr.month + dayStr.day;
    var ddmmyy =dayStr.day + dayStr.month + dayStr.year.slice(-2);
    var mmddyy = dayStr.month+ dayStr.day + dayStr.year.slice(-2);
    var yymmdd =dayStr.year.slice(-2) + dayStr.month + dayStr.day;
    var listOfAll =[ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    return listOfAll;
  }

  function checkPalindromeForAll(date){
    var listDate = getAllDateFormats(date);
    var flag = false;
    for(i= 0;i<listDate.length;i++){
      if(checkPalindrome(listDate[i])){
        flag =true;
        // console.log(listDate[i])
        break;
      }
    }
    return flag;
  }