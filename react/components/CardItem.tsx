import React from 'react';
import {Link} from 'vtex.render-runtime';
import {useCssHandles} from 'vtex.css-handles';
import {CardItemProps} from './CustomGridTypes';

const CardItem = ({src, titleItem, link, description}:CardItemProps) => {

  const CSS_HANDLES=["card_item","card_item--title","card_item--image","card_item--figure","card_item--link","card_item--desc"]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.card_item}>
        <figure className={handles["card_item--figure"]}>
          <img src={src} alt={titleItem} className={handles["card_item--image"]} />
        </figure>
        <h3 className={handles["card_item--title"]}>{titleItem}</h3>
        <p className={handles["card_item--desc"]}>{description}</p>
        <Link to={link.url} className={handles["card_item--link"]}>
            {link.text}
        </Link>
    </div>
  );
};

CardItem.schema ={
  title: "Card",
  type: "object",
  properties: {
    src:{
      title:"Imagen del item",
      type:"string",
      widget:{
        "ui:widget": "image-uploader"
      }
    }
  }
}

export default CardItem;
