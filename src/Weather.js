function Weather() {};

Weather.prototype.isStormy = function() {
  if (Math.floor(Math.random()) > 0.8) {
    return true;
  } else {
    return false;
  };
};
