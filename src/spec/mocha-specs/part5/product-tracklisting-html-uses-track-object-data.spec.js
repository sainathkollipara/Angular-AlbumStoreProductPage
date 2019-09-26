const assert = require("chai").assert;
const parse5 = require("parse5");
const cheerio = require("cheerio");
const helpers = require("../helpers");

describe("ProductTracklisting", () => {
  it("should use data from the giftProductInfo.tracks property in the HTML template @product-tracklisting-html-uses-detail-object-data", () => {
    let tracklisting;
    let element;
    const productTracklistingFile = helpers.readFile(
      "src/app/product-tracklisting/product-tracklisting.component.html"
    );
    const productTracklistingNodes = helpers.parseFile(productTracklistingFile);
    productTracklistingNodes[0].attrs.find(
      attr => (tracklisting = attr.value.match(/tracklisting/))
    );
    const productListing = parse5.serialize(productTracklistingNodes[0]);
    let $ = cheerio.load(productListing);
    const li = $("li");
    const trackNumber = $(".detail-number");
    const trackName = $(".detail-name");
    const trackTime = $(".detail-time");
    const trackPrice = $(".price-and-buy");

    helpers.readFile(
      "src/app/product-tracklisting/product-tracklisting.component.html",
      "The ProductTracklistingComponent doesn't exist - have you run the `ng` command to generate it yet?"
    );

    try {
      element = productTracklistingNodes[0].tagName;
    } catch (e) {
      assert(
        "The ProductTracklistingComponent's HTML file doesn't contain a `div` tag with a class of `tracklisting`."
      );
    }

    assert(
      element !== "p",
      "It looks like you have not replaced the `<p></p>` element with a `div` tag with a class of `tracklisting`."
    );

    assert(
      element === "div",
      "The ProductTracklistingComponent's HTML file doesn't contain a `div` tag."
    );

    assert(
      !!tracklisting,
      "It looks like the ProductTracklistingComponent does not contain the `tracklisting` `<div></div>` from the ProductPageComponent."
    );

    assert(
      li.length > 0,
      "It doesn't look like that there is a `<li></li>` element."
    );

    assert(
      li.length < 2,
      "We shouldn't need more than one `<li></li>` element. We should be using the `ngFor` directive to generate the other list items."
    );

    assert(
      !!li.attr()["*ngfor"],
      "It doesn't look like that the ProductTracklistingComponent is using the `ngFor` directive."
    );

    assert(
      li
        .attr()
        ["*ngfor"].match(/\s*let\s*detail\s*of\s*giftProductInfo\?.album.tracks/),
      "The `ngFor` directive doesn't have `let detail of giftProductInfo?.album.tracks` as its value."
    );

    assert(
      trackNumber.hasClass("detail-number"),
      "The ProductTrackinglistComponent should have a `span` with a class of `detail-number`."
    );

    assert(
      trackNumber.text().match(/\s*{{\s*detail.trackNumber\s*}}\s*/),
      "The ProductTrackinglistComponent should have a `span` with a class of `detail-number` with a text of `{{detail.trackNumber}}`."
    );

    assert(
      trackName.hasClass("detail-name"),
      "The ProductTrackinglistComponent should have a `span` with a class of `detail-name`."
    );

    assert(
      trackName.text().match(/\s*{{\s*detail.trackName\s*}}\s*/),
      "The ProductTrackinglistComponent should have a `span` with a class of `detail-name` with a text of `{{detail.trackName}}`."
    );

    assert(
      trackTime.hasClass("detail-time"),
      "The ProductTrackinglistComponent should have a `span` with a class of `detail-time`."
    );

    assert(
      trackTime.text().match(/\s*{{\s*detail.trackLength\s*}}\s*/),
      "The ProductTrackinglistComponent should have a `span` with a class of `detail-time` with a text of `{{detail.trackLength}}`."
    );

    assert(
      trackPrice.hasClass("price-and-buy"),
      "The ProductTrackinglistComponent should have a `span` with a class of `price-and-buy`."
    );

    assert(
      trackPrice.text().match(/\s*{{\s*detail.trackPrice\s*}}\s*/),
      "The ProductTrackinglistComponent should have a `span` with a class of `price-and-buy` with a text of `{{detail.trackPrice}}`."
    );
  });
});
