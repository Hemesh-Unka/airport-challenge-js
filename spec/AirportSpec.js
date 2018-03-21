describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land', 'takeoff']);
  });

  describe('hangar', function(){
    it('initially has an empty hangar', function(){
      expect(airport._hangar).toEqual ([]);
    });
  });

  describe('clearForLanding', function(){
    it('returns true for good weather', function(){
      weather = jasmine.createSpy('Weather', {
        'isStormy': true
      });
      airport.clearForLanding(plane);
      expect(airport.clearForLanding()).toEqual(true);
    });
  });

  describe('_addToHangar', function() {
    it('adds landed plane to hangar', function(){
      airport._addToHangar(plane);
      expect(airport._hangar).toEqual([plane]);
    });
  });
});
