function Airport() {
  this._hangar = [];
};

Airport.prototype.clearForLanding = function(plane) {
  // plane._approved = true
  return true
};

Airport.prototype.clearForTakeOff = function(plane) {
  this.hangar.pop(plane)
};

Airport.prototype._addToHangar = function(plane) {
  this._hangar.push(plane);
};
