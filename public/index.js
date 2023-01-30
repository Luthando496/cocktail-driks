var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
var zoom = document.querySelector('.zoom');
var Flickity = new Flickity( zoom, {
  // options
  cellAlign: 'left',
  contain: true,
  // groupCells:3,
});