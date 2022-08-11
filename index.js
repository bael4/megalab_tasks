function currentTimeAndDay()
{
  const date = new Date();
  

  const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const days = date.getDay();
  const clock = document.getElementById("clock");
  const day = document.getElementById("dayOfWeek");

  
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  
  if(hours < 10){hours = "0"+ hours;}
  if(seconds < 10){seconds = "0"+ seconds;}
 let ampm = hours < 12 ? 'pm':'am'
  hours = hours % 12
  let current_time = hours +" "+ ampm +": "+ minutes +": "+ seconds

  clock.innerText = 'Current time is : '+current_time;
  day.innerText = 'Today is: ' + dayOfWeek[days];
  setTimeout("currentTimeAndDay()",1000)
}
currentTimeAndDay()


