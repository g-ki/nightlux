
let locator = null

if ("geolocation" in navigator) {
  console.log('geolocation IS available');
  locator = navigator.geolocation
} else {
  console.warn('geolocation IS NOT available');
}

export default locator;


