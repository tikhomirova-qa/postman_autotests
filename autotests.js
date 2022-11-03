//autotest for method https://swapi.dev/api/people/10/

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


//autotest for method https://swapi.dev/api/planets/7/

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("temperate");
});
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Endor");
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("forests, mountains, lakes");
});