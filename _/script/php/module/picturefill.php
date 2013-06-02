<?php
/**
 * injects necessary code for pictureFill (https://github.com/scottjehl/picturefill)
 */
function pictureFillImage($config){
  /*
    $config = array(
      "src" => "", // [REQUIRED] standard density src
      "alt" => "", // [REQUIRED] alt attribute
      "showAt" => "", // min-width to show the images at all - usefull to hide on small devices
      "showMaxAt" => "" // width at which to show the 2x image to non-retina devices - usefull to super size images on widescreens
    );
  */

  //create @2x uri
  $config["retinaSrc"] = str_replace('.', '@2x.', $config['src']);
  $image="";
  $image.=(isset($config['link']))?"<a href='".$config['link']."'>":"";
  $image.= "<div data-picture data-alt='".$config['alt']."'>\n";
  if(isset($config['src'])) {

      // <div data-src='' data-media='? min width'></div>
      $image .= "<div data-src='".$config['src']."'";
      $image .= (isset($config['showAt'])) ? " data-media='(min-width: ".$config['showAt'].")'" : "";
      $image .= "></div>\n";

      //<div data-src='@2x' data-media='2x queries ? min-width'></div>
      $image .= "<div data-src='".$config['retinaSrc']."'";
      if(isset($config['showAt'])) {
        $image .= " data-media='(min-width: ".$config['showAt'].") and (-webkit-min-device-pixel-ratio: 2), (min-width: ".$config['showAt'].") and (min-device-pixel-ratio: 2), (min-width: ".$config['showAt'].") and (min-resolution: 192dpi), (min-width: ".$config['showAt'].") and (min-resolution: 2dppx)'";
      } else {
        $image .= " data-media='(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)'";
      }
      $image .= "></div>";

      //<div data-src='@2x' data-media='? min-width > showMaxAt'></div>
      if(isset($config['showMaxAt'])) {
        $image .= "<div data-src='".$config['retinaSrc']."' data-media='(min-width: ".$config['showMaxAt'].")'></div>\n";
      }

      // old IE
      $image .= "<!--[if (lt IE 9) & (!IEMobile)]>
        <div data-src='".$config['src']."'></div>
      <![endif]-->\n";

      // no javascript
      $image .= "<noscript><img src='".$config['src']."' alt='".$config['alt']."'></noscript>\n";
  }
  $image .= "</div>";
  $image.=(isset($config['link']))?"</a>":"";
  $image.="\n\n";

  return $image;
}