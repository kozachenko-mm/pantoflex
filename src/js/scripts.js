function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      const t = getTimeRemaining(endtime);  
      hoursSpan.textContent = ('0' + t.hours).slice(-2);
      minutesSpan.textContent = ('0' + t.minutes).slice(-2);
      secondsSpan.textContent = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
     
  function getSecondsToTomorrow() {
    let now = new Date();  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);  
    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
  }

  initializeClock('countdown', getSecondsToTomorrow());
