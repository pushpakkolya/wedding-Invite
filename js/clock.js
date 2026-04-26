$(document).ready(function() {
  let clock;

  let currentDate = new Date();
  let targetDate = moment.tz("2026-07-05 12:30", "Asia/Kolkata");

  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {

    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });

    console.log("Date has already passed!");

  } else {

    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!");
        }
      }
    });

    /* ✅ ADD THIS BLOCK RIGHT HERE */
    setTimeout(() => {
      const setLabel = (selector, text) => {
        const el = document.querySelector(selector);
        if (el) el.innerText = text;
      };

      setLabel('.flip-clock-divider.days .flip-clock-label', 'Days');
      setLabel('.flip-clock-divider.hours .flip-clock-label', 'Hours');
      setLabel('.flip-clock-divider.minutes .flip-clock-label', 'Minutes');
      setLabel('.flip-clock-divider.seconds .flip-clock-label', 'Seconds');
    }, 300);

    // existing logic
    setTimeout(function() {
      checktime();
    }, 1000);

    function checktime() {
      let t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }
});
