describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('Adds plane to hanger array - assuming good weather', function() {
    airport.clearForLanding(plane);
    plane.land(airport)
    
    expect(airport._hangar).toContain(plane);
  });
});
