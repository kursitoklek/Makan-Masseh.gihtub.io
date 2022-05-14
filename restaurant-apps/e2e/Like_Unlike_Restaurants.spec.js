const assert = require('assert');
Feature('Like Unlike Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#list-resto');
    I.see(`You don't have any Favorite Restaurant`, '#list-resto');
});

Scenario('like and unlike one restaurant', async({ I }) => {
    I.see(`You don't have any Favorite Restaurant`, '#list-resto');

    I.amOnPage('/');

    I.seeElement('.list_item_content a');

    const firstRestaurant = locate('.list_item_content a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.list_item');
    I.seeElement('.list_item_content');
    const likedRestaurantTitle = await I.grabTextFrom('.list_item_title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement(firstRestaurant);

    I.see(`You don't have any Favorite Restaurant`, '#list-resto');
});