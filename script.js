var dateDiffInDays = function (date1, date2) {
  const utcDate1 = Date.UTC(
   date1.getFullYear(),
   date1.getMonth(),
   date1.getDate()
 );
 const utcDate2 = Date.UTC(
   date2.getFullYear(),
   date2.getMonth(),
   date2.getDate()
 );


 const timeDifference = utcDate2 - utcDate1;


 const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

 return daysDifference;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
