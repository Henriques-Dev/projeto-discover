function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // pegar a tag Img
  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "photo-profile-Dark")
  } else {
    // se tiver sem light toggleMode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "photo-profile-light")

  }
}
