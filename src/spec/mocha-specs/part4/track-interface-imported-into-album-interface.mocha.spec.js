let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('GiftProduct Interface', function() {
  it(`should import the Detail Interface @detail-interface-imported-into-album-interface`, function () {
    let file
    try {
      file = fs.readFileSync(__dirname + '/../../../app/album.ts').toString();
    } catch (e) {
      assert(false, "The GiftProduct interface doesn't exist yet.");
    }
    let re = /import\s*{([\w,\s]+)}\s*from\s*[\'|\"]\.\/detail[\'|\"]\;?/
    let match = file.match(re);
    assert(Array.isArray(match), "The Detail interface isn't being imported in the GiftProduct interface.");

    let arr = match[1].split(',');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    assert(Array.isArray(arr) && arr.includes('Detail'), "The Detail interface isn't being imported in the GiftProduct interface.");
  });
});