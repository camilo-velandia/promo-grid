import React from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import {useDevice} from 'vtex.device-detector'
import {useCssHandles} from 'vtex.css-handles';
import {CustomGridProps} from './CustomGridTypes'
import { getItemsAsTSXList } from './ItemAsList'
import customGridSchema from '../schemas/CustomGridSchema';
import styles from './styles.css'


const CustomGrid = ({gridItem, gridTypeDesktop = 1, gridTypeMobile = 1}:CustomGridProps) => {

  const CSS_HANDLES=["grid_container","grid_container_mobile"]
  const handles = useCssHandles(CSS_HANDLES)
  const { isMobile } = useDevice()
  const {list} = useListContext() || []
  const itemsGroup = getItemsAsTSXList(gridItem)
  const newListContextValue = list.concat(itemsGroup)
  const gridTypeClassDesktop = `grid__desktop__${gridTypeDesktop}`
  const gridTypeClassMobile = `grid__mobile__${gridTypeMobile}`

  if(!gridItem.length){
    return <h2>No hay promociones en este momento</h2>
  }

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
          <div className={`${handles.grid_container_mobile } ${styles[gridTypeClassMobile]}`}>{itemsGroup}</div>
        :
          <div className={`${handles.grid_container} ${styles[gridTypeClassDesktop]}`}>{itemsGroup}</div>
      }
    </ListContextProvider>
  );
};

CustomGrid.schema = customGridSchema

export default CustomGrid;
