import React from "react";
import "./style.css";


const WithStyles = ({
  headline = "kd",
  description,
  image,
}) => {
  return (
    <div>
      <div className="highlight--section-image" data-script="image-cover">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet=" /dfsmedia/203ddbf073b24e7dac6f6243dabf7669/124727-50059/resize/768x1536/options/keepaspectratio/s11-tech1-86168-50033-x2-x-landscape-169-2880-x-1620  1x, /dfsmedia/203ddbf073b24e7dac6f6243dabf7669/124727-50059/resize/1536x3072/options/keepaspectratio/s11-tech1-86168-50033-x2-x-landscape-169-2880-x-1620 2x "
          />
          <source
            media="(max-width: 1024px)"
            srcSet=" /dfsmedia/203ddbf073b24e7dac6f6243dabf7669/124727-50059/resize/1024x2048/options/keepaspectratio/s11-tech1-86168-50033-x2-x-landscape-169-2880-x-1620 1x, /dfsmedia/203ddbf073b24e7dac6f6243dabf7669/124727-50059/resize/2048x4096/options/keepaspectratio/s11-tech1-86168-50033-x2-x-landscape-169-2880-x-1620 2x "
          />
          <img
          src={image}

            alt=""
            className="img-cover"
          />
        </picture>
      </div>
      <h3 className="eyebrow eyebrow-red highlight--section-title-black">
{headline}
      </h3>
      <div className="highlight--section-description"><p>{description}</p></div>
    </div>
  );
};

export default WithStyles;