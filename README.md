This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

  - [`npm start` doesn’t detect changes](#npm-start-doesnt-detect-changes)
  - [`npm test` hangs on macOS Sierra](#npm-test-hangs-on-macos-sierra)

## About

This is web version of map of The Banner Saga game.

- `npm start`  or `yarn start` to run project

I use assets from steam version of The Banner Saga game. If you want to help and add more locations to the map, follow next steps:
- Find asset of location in game files (like `hover_rundwall.png`), and copy it into `src/components/mapObject/map`
- Add object into `mapObjects` array (`src/constants/MapObjects.js`) like this:
```
{
    name: 'Valkajokull',
    className: 'valkajokull',
    text: 'Lorem ipsum dolor sit amet, his debitis admodum reprimique ea, cu sed forensibus temporibus. Ne possit patrioque per, cum utamur consulatu cu. Vis id alterum indoctum disputationi, nec insolens persecuti ei. Usu volumus probatus in. Essent repudiare intellegam id cum, utroque voluptua laboramus per id.'
},
```
- Define new mixin class in Map.scss `[location name]Mixin` (like `wordanMixin`, `valkajokullMixin`)
- Add left/right/tob/bottom coordinates, width, height, make position: `absolute`. After that mixin should look like:
```
@mixin wordanMixin(){
  width: 109px;
  height: 50px;
  top: 195px;
  left: 666px;
  position: absolute;
}
```
- Define 2 css classes: `[location name]` with included mixin, and `[location name]-bg` with mixin and background-image.
Example:
```
.wordan {
  @include wordanMixin;
}
.wordan-bg {
  @include wordanMixin;
  @include backgroundImage("map/hover_wordan.png");
}
```
- Define css class `[location name]-inner`. This container is used to indicate the area and when 
you hover over on it, a blue image appears.
```
.wordan-inner {
  width: 109px;
  height: 50px;
  z-index: 100;
  cursor: pointer;
}
```
Sometimes you have to define clip-path to create more complicated area for hover:
```
.valkajokull-inner {
  width: 619px;
  height: 300px;
  left: 291px;
  top: 437px;
  position: absolute;
  clip-path: polygon(106px 148px, 67px 34px, 243px 20px, 427px 68px, 564px 196px, 496px 266px, 367px 166px, 264px 137px);
}
```
Best way to do this is use Chrome extension `CSS Shapes Editor`. Check video guide 
[here](https://www.youtube.com/watch?v=zdWsBZiGiZc).