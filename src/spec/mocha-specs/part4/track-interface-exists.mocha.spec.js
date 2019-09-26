let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('Detail Interface', function() {
  it(`should exist @detail-interface-exists`, function () {
    assert(fs.existsSync(__dirname + '/../../../app/detail.ts'), "The Detail interface hasn't been created yet.");

    let file
    try {
      file = fs.readFileSync(__dirname + '/../../../app/detail.ts').toString();
    } catch (e) {
      assert(false, "The Detail interface doesn't exist yet.")
    }
    let re = /export\s+interface\s+Detail/
    assert(Array.isArray(file.match(re)) && file.match(re) != null, "There's a `detail.ts` file, but it doesn't export an interface named `Detail`.");
  });
});