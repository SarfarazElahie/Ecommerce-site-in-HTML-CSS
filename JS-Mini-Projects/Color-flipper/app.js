
// Variables 

let colorCode = document.querySelector(".Bg-color-container h2 span ")

let colorCodeValue = colorCode.innerText
let body = document.querySelector("body")
let button = document.querySelector("button")

// color object 

const colors = [
  { colorName: "AliceBlue", hexValue: "#F0F8FF" },
  { colorName: "AntiqueWhite", hexValue: "#FAEBD7" },
  { colorName: "Aqua", hexValue: "#00FFFF" },
  { colorName: "Aquamarine", hexValue: "#7FFFD4" },
  { colorName: "Azure", hexValue: "#F0FFFF" },
  { colorName: "Beige", hexValue: "#F5F5DC" },
  { colorName: "Bisque", hexValue: "#FFE4C4" },
  { colorName: "Black", hexValue: "#000000" },
  { colorName: "BlanchedAlmond", hexValue: "#FFEBCD" },
  { colorName: "Blue", hexValue: "#0000FF" },
  { colorName: "BlueViolet", hexValue: "#8A2BE2" },
  { colorName: "Brown", hexValue: "#A52A2A" },
  { colorName: "BurlyWood", hexValue: "#DEB887" },
  { colorName: "CadetBlue", hexValue: "#5F9EA0" },
  { colorName: "Chartreuse", hexValue: "#7FFF00" },
  { colorName: "Chocolate", hexValue: "#D2691E" },
  { colorName: "Coral", hexValue: "#FF7F50" },
  { colorName: "CornflowerBlue", hexValue: "#6495ED" },
  { colorName: "Cornsilk", hexValue: "#FFF8DC" },
  { colorName: "Crimson", hexValue: "#DC143C" },
  { colorName: "Cyan", hexValue: "#00FFFF" },
  { colorName: "DarkBlue", hexValue: "#00008B" },
  { colorName: "DarkCyan", hexValue: "#008B8B" },
  { colorName: "DarkGoldenRod", hexValue: "#B8860B" },
  { colorName: "DarkGray", hexValue: "#A9A9A9" },
  { colorName: "DarkGreen", hexValue: "#006400" },
  { colorName: "DarkKhaki", hexValue: "#BDB76B" },
  { colorName: "DarkMagenta", hexValue: "#8B008B" },
  { colorName: "DarkOliveGreen", hexValue: "#556B2F" },
  { colorName: "DarkOrange", hexValue: "#FF8C00" },
  { colorName: "DarkOrchid", hexValue: "#9932CC" },
  { colorName: "DarkRed", hexValue: "#8B0000" },
  { colorName: "DarkSalmon", hexValue: "#E9967A" },
  { colorName: "DarkSeaGreen", hexValue: "#8FBC8F" },
  { colorName: "DarkSlateBlue", hexValue: "#483D8B" },
  { colorName: "DarkSlateGray", hexValue: "#2F4F4F" },
  { colorName: "DarkTurquoise", hexValue: "#00CED1" },
  { colorName: "DarkViolet", hexValue: "#9400D3" },
  { colorName: "DeepPink", hexValue: "#FF1493" },
  { colorName: "DeepSkyBlue", hexValue: "#00BFFF" },
  { colorName: "DimGray", hexValue: "#696969" },
  { colorName: "DodgerBlue", hexValue: "#1E90FF" },
  { colorName: "FireBrick", hexValue: "#B22222" },
  { colorName: "FloralWhite", hexValue: "#FFFAF0" },
  { colorName: "ForestGreen", hexValue: "#228B22" },
  { colorName: "Fuchsia", hexValue: "#FF00FF" },
  { colorName: "Gainsboro", hexValue: "#DCDCDC" },
  { colorName: "GhostWhite", hexValue: "#F8F8FF" },
  { colorName: "Gold", hexValue: "#FFD700" },
  { colorName: "GoldenRod", hexValue: "#DAA520" },
  { colorName: "Gray", hexValue: "#808080" },
  { colorName: "Green", hexValue: "#008000" },
  { colorName: "GreenYellow", hexValue: "#ADFF2F" },
  { colorName: "HoneyDew", hexValue: "#F0FFF0" },
  { colorName: "HotPink", hexValue: "#FF69B4" },
  { colorName: "IndianRed", hexValue: "#CD5C5C" },
  { colorName: "Indigo", hexValue: "#4B0082" },
  { colorName: "Ivory", hexValue: "#FFFFF0" },
  { colorName: "Khaki", hexValue: "#F0E68C" },
  { colorName: "Lavender", hexValue: "#E6E6FA" },
  { colorName: "LavenderBlush", hexValue: "#FFF0F5" },
  { colorName: "LawnGreen", hexValue: "#7CFC00" },
  { colorName: "LemonChiffon", hexValue: "#FFFACD" },
  { colorName: "LightBlue", hexValue: "#ADD8E6" },
  { colorName: "LightCoral", hexValue: "#F08080" },
  { colorName: "LightCyan", hexValue: "#E0FFFF" },
  { colorName: "LightGoldenRodYellow", hexValue: "#FAFAD2" },
  { colorName: "LightGray", hexValue: "#D3D3D3" },
  { colorName: "LightGreen", hexValue: "#90EE90" },
  { colorName: "LightPink", hexValue: "#FFB6C1" },
  { colorName: "LightSalmon", hexValue: "#FFA07A" },
  { colorName: "LightSeaGreen", hexValue: "#20B2AA" },
  { colorName: "LightSkyBlue", hexValue: "#87CEFA" },
  { colorName: "LightSlateGray", hexValue: "#778899" },
  { colorName: "LightSteelBlue", hexValue: "#B0C4DE" },
  { colorName: "LightYellow", hexValue: "#FFFFE0" },
  { colorName: "Lime", hexValue: "#00FF00" },
  { colorName: "LimeGreen", hexValue: "#32CD32" },
  { colorName: "Linen", hexValue: "#FAF0E6" },
  { colorName: "Magenta", hexValue: "#FF00FF" },
  { colorName: "Maroon", hexValue: "#800000" },
  { colorName: "MediumAquaMarine", hexValue: "#66CDAA" },
  { colorName: "MediumBlue", hexValue: "#0000CD" },
  { colorName: "MediumOrchid", hexValue: "#BA55D3" },
  { colorName: "MediumPurple", hexValue: "#9370DB" },
  { colorName: "MediumSeaGreen", hexValue: "#3CB371" },
  { colorName: "MediumSlateBlue", hexValue: "#7B68EE" },
  { colorName: "MediumSpringGreen", hexValue: "#00FA9A" },
  { colorName: "MediumTurquoise", hexValue: "#48D1CC" },
  { colorName: "MediumVioletRed", hexValue: "#C71585" },
  { colorName: "MidnightBlue", hexValue: "#191970" },
  { colorName: "MintCream", hexValue: "#F5FFFA" },
  { colorName: "MistyRose", hexValue: "#FFE4E1" },
  { colorName: "Moccasin", hexValue: "#FFE4B5" }
];



/*let colorCodeValue = colorCode.innerText
let body = document.querySelector("body")
let button = document.querySelector("button")*/

button.addEventListener("click",()=>{
    let random = Math.floor(Math.random() * colors.length)

    colorCode.innerText = colors[random].colorName
    body.style.backgroundColor = colors[random].hexValue
})
