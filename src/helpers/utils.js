
import janImage from "../images/january.jpg"
import febImage from "../images/february.jpg"
import marImage from "../images/march.jpg"
import aprImage from "../images/april.jpg"
import mayImage from "../images/may.jpg"
import junImage from "../images/june.jpg"
import julImage from "../images/july.jpg"
import augImage from "../images/august.jpg"
// import sepImage from "../images/february.jpg"
// import octImage from "../images/february.jpg"
// import novImage from "../images/february.jpg"
// import decImage from "../images/february.jpg"

const imagesMap = {
  0: janImage,
  1: febImage,
  2: marImage,
  3: aprImage,
  4: mayImage,
  5: junImage,
  6: julImage,
  7: augImage,
  //8: sepImage,
  //9: octImage,
  //10: novImage,
  //11: decImage
}

export function getImage(imageIndex) {
  return imagesMap[imageIndex];
}
