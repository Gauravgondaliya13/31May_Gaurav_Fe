function updateClock() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = now.getMonth() + 1; // Months are zero-based
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds;
    var dateString = day + ', ' + date + '/' + month + '/' + year;
  
    document.getElementById('clock').innerHTML = timeString + '<br>' + dateString;
  
    setTimeout(updateClock, 1000); // Update time every second
  }
  
  // Call updateClock function to start updating the clock
  updateClock();  