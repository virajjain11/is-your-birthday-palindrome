function reverseStr(str) {
    var newStr = str.split('');
    var strList = newStr.reverse().join('');
    return strList;
  }
  
  function checkPalindrome(str) {
    return (str === reverseStr(str));
  }