let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('ProductTracklisting', function() {
  it(`should have a class property named giftProductInfo of type GiftProduct @product-tracklisting-has-albuminfo-property`, function () {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product-tracklisting/product-tracklisting.component.ts').toString();
    } catch (e) {
      assert(false, "ProductTracklistingComponent doesn't exist yet.")
    }
    let re = /giftProductInfo/
    let match1 = file.match(re);
    assert(Array.isArray(file.match(re)), "The `giftProductInfo` property doesn't exist yet.");

    let re2 = /giftProductInfo\s*\:\s*(\w+)/
    let match2 = file.match(re2);
    assert(Array.isArray(file.match(re2)), "The `giftProductInfo` property doesn't have the correct type declaration.");

    let albumInfoType = match2[1].trim();
    assert(albumInfoType.includes('GiftProduct'), "The `giftProductInfo` type isn't declared as `GiftProduct`.");
  });
});