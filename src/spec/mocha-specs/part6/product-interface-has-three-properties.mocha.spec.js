let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('Product Interface', function () {
  it(`should have an id property of type number @product-interface-has-three-properties`, function () {
    let file
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product.ts').toString();
    } catch (e) {
      assert(false, "The Product interface doesn't exist yet.")
    }
    let re = /export\s+interface\s+Product\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
    let match = file.match(re);
    assert(Array.isArray(match) && match != null, "There's a `product.ts` file, but it doesn't export an interface named `Product`.");
    
    let arr = match[1].split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    let properties = [];    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 0) {
        let obj = {};
        obj['key'] = arr[i].trim().split(':')[0].trim();
        obj['value'] = arr[i].trim().split(':')[1].trim();
        properties[i] = obj;
      }
    }
    
    let idKeyFound = false
      , idValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'id') {
        idKeyFound = true;
        if (properties[i].value.match(new RegExp(/number/))) {
          idValueFound = true;
        }
      }
    }
    assert(idKeyFound, "The Product Interface doesn't define a property named `id`.");
    assert(idValueFound, "The Product Interface's `id` property isn't typed as `number`.");
  });

  it(`should have an categoryName property of type string @product-interface-has-three-properties`, function () {
    let file
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product.ts').toString();
    } catch (e) {
      assert(false, "The Product interface doesn't exist yet.")
    }
    let re = /export\s+interface\s+Product\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
    let match = file.match(re);
    assert(Array.isArray(match) && match != null, "There's a `product.ts` file, but it doesn't export an interface named `Product`.");
    
    let arr = match[1].split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    let properties = [];    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 0) {
        let obj = {};
        obj['key'] = arr[i].trim().split(':')[0].trim();
        obj['value'] = arr[i].trim().split(':')[1].trim();
        properties[i] = obj;
      }
    }
    
    let artistNameKeyFound = false
      , artistNameValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'categoryName') {
        artistNameKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          artistNameValueFound = true;
        }
      }
    }
    assert(artistNameKeyFound, "The Product Interface doesn't define a property named `categoryName`.");
    assert(artistNameValueFound, "The Product Interface's `categoryName` property isn't typed as `string`.");
  });

  it(`should have an categoryDescription property of type string @product-interface-has-three-properties`, function () {
    let file
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product.ts').toString();
    } catch (e) {
      assert(false, "The Product interface doesn't exist yet.")
    }
    let re = /export\s+interface\s+Product\s*\{\s*([\w\s\:\;\[\]]+)\s*\}/
    let match = file.match(re);
    assert(Array.isArray(match) && match != null, "There's a `product.ts` file, but it doesn't export an interface named `Product`.");
    
    let arr = match[1].split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }

    let properties = [];    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim().length > 0) {
        let obj = {};
        obj['key'] = arr[i].trim().split(':')[0].trim();
        obj['value'] = arr[i].trim().split(':')[1].trim();
        properties[i] = obj;
      }
    }
    
    let albumNameKeyFound = false
      , albumNameValueFound = false
    for (let i = 0; i < properties.length; i++) {
      if (properties[i].key == 'categoryDescription') {
        albumNameKeyFound = true;
        if (properties[i].value.match(new RegExp(/string/))) {
          albumNameValueFound = true;
        }
      }
    }
    assert(albumNameKeyFound, "The Product Interface doesn't define a property named `categoryDescription`.");
    assert(albumNameValueFound, "The Product Interface's `categoryDescription` property isn't typed as `string`.");
  });
});