// Write your Constructor Function that will generate a different response for each
// day of the week.

exports.getResponse = function(str) {
  switch(str) {
    case 'Monday':
      return 'Ugh, Mondays...';
    case 'Tuesday':
      return "Wow, it's Tuesday.";
    case 'Wednesday':
      return 'Hump day!!!';
    case 'Thursday':
      return 'Tomorrow is Friday!';
    case 'Friday':
      return 'Time to get down.';
    case 'Saturday':
      return "Sleep in! It's Saturday!";
    case 'Sunday':
      return "Sleep in again! But don't forget about homework!";
  }
};
