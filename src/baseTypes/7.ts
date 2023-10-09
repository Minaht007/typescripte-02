/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  IsWeekend = "isWeekend",
  
}
const isWeekend =(day: Days): boolean => {

if (day === Days.IsWeekend) {
  return true
} else {
  return false
}

  // switch (day) {
  //   case Days.IsWeekend:      
  //     console.log("true")
  //     return true
  //   case Days.IsNotWeekend:
  //     console.log("false")
  //     return false
  // }
}

