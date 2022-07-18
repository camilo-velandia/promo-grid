import React from 'react'
import {CustomGridSchema} from './CustomGridTypes'
import CardItem from './CardItem'

export const getItemsAsTSXList =(
  item: CustomGridSchema
) => {
  return(
    item?.map((listItem:any , index)=>(
        <CardItem
          key={index}
          src={listItem?.image}
          titleItem={listItem?.title}
          description={listItem?.description}
          link={
              listItem?.link ? listItem?.link : {
                  url:'',
                  text:'',
                  attributeNofollow:false,
                  attributeTitle:'',
                  openNewTab:false,
                  newTab:false
                }
              }
         />
      ))
    )
  }
