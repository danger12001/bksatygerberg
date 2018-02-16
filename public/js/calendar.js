var events = [
{id: 'jan',
  events: [
    {title: 'Bring en braai by die Buckles', activity: 'Klubaand/AJV', date: 'January 27, 2018', grade: 'N/A'}
  ]},
{id: 'feb'},
{id: 'mar'},
{id: 'apr'},
{id: 'may'},
{id: 'jun'},
{id: 'jul'},
{id: 'aug'},
{id: 'sep'},
{id: 'oct'},
{id: 'nov'},
{id: 'dec'}
];

let selectedMonth = 'jan';

var calendarContainers =[
{id: 'jan', container: 'janContainer'},
{id: 'feb', container: 'febContainer'},
{id: 'mar', container: 'marContainer'},
{id: 'apr', container: 'aprContainer'},
{id: 'may', container: 'mayContainer'},
{id: 'jun', container: 'junContainer'},
{id: 'jul', container: 'julContainer'},
{id: 'aug', container: 'augContainer'},
{id: 'sep', container: 'sepContainer'},
{id: 'oct', container: 'octContainer'},
{id: 'nov', container: 'novContainer'},
{id: 'dec', container: 'decContainer'}
];
var calendarButtons = []



for(var x = 0; x< calendarContainers.length; x++){
  calendarContainers[x].element = document.getElementById(calendarContainers[x].container);
  calendarButtons.push({id: calendarContainers[x].id, element: document.getElementById(calendarContainers[x].id)});
}


calendarContainers.forEach(function(element) {
  if(element.element){
    if(element.id !== selectedMonth){
      element.element.style.display = 'none';
    } else {
      element.element.style.display = 'block';
    }
  }
})

var selectMonth = function(month){
  selectedMonth = month;
  calendarContainers.forEach(function(element) {
    if(element.element){
      if(element.id !== selectedMonth){
        element.element.style.display = 'none';
        calendarButtons.forEach(function(button){
          if(button.id === month){
            button.element.classList.add('calendar-btn-selected')
          } else {
            button.element.classList.remove('calendar-btn-selected')
          }
        })
      } else {
        element.element.style.display = 'block';
      }
    }
  })
}
