let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('ProductDescription', function() {
  it(`should import the GiftProduct Interface @album-interface-imported-into-product-description`, function () {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product-description/product-description.component.ts').toString();
    } catch (e) {
      assert(false, "ProductDescriptionComponent doesn't exist yet.")
    }
    let re = /import\s*{\s*GiftProduct\s*}\s*from\s*[\'|\"]\.\.\/album[\'|\"]\;?/
    assert(Array.isArray(file.match(re)) && file.match(re) != null, "The GiftProduct Interface hasn't been imported into the ProductDescriptionComponent yet.");
  });
});