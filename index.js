var tab = localStorage.getItem('tab');
if (tab) {
  try {
    // Parse the data, it is in JSON
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

// Set the Tab title if the Tab cloak data is there
if (tabData.title) {
  document.title = tabData.title;
}

// Set the Tab icon if the Tab cloak data is there
if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}

// Set theme colors if the user has set it
function getContrastHex(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#1c1c1c' : 'white';
}

// Set theme colors if the user has set it
function getColorHex(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'white' : 'black';
}

// Set theme colors if the user has set it
var theme = localStorage.getItem('theme') || 'default';
let themes;

// Fetching themes
fetch(origin + 'assets/json/themes.json')
  .then((res) => res.json())
  .then((data_themes) => {
    themes = data_themes;

    if (theme !== 'custom') {
      document.body.setAttribute('theme', theme);

      if (location.pathname.includes('/settings')) {
        themes.forEach((palette) => {
          if (palette.theme == theme) {
            console.log(palette.theme);
            document.querySelector('#theme_color').value = palette.color;
          }
        });
      }
    } else {
      // Get custom theme
      const theme = localStorage.getItem('theme_color');

      document.body.setAttribute('theme', 'custom');
      document.body.style = `--theme: ${theme}; --background: ${getContrastHex(theme)}; --text: ${getColorHex(theme)}; --text-secondary: ${getColorHex(theme)};`;

      if (location.pathname.includes('/settings')) {
        // Make the custom theme color selector
        document.querySelector('#theme_color').value = theme;
      }
    }
  })