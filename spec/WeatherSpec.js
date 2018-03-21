describe('Weather', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('isStormy', function() {
    it('returns true if stormy', function() {
      spyOn(Math, 'random').and.returnValue(1)
      expect(weather.isStormy()).toEqual(true)
    });

    it('returns false if NOT stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.1)
      expect(weather.isStormy()).toEqual(false)
    });
  });
});
