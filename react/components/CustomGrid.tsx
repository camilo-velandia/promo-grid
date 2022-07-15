import React from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import {useDevice} from 'vtex.device-detector'
import {useCssHandles} from 'vtex.css-handles';
import {CustomGridSchema} from './CustomGridTypes'
import { getItemsAsTSXList } from './ItemAsList'
import customGridSchema from '../schemas/CustomGridSchema';
import styles from './styles.css'

export interface CustomGridProps{
  items: CustomGridSchema
  gridTypeDesktop: number
  gridTypeMobile: number
}

const CustomGrid = ({items, gridTypeDesktop = 1, gridTypeMobile = 1}:CustomGridProps) => {

  const CSS_HNDLES=["grid_container","grid_container_mobile"]
  const handles = useCssHandles(CSS_HNDLES)
  const { isMobile } = useDevice()
  const {list} = useListContext() || []
  const bulletsGroup = getItemsAsTSXList(items)
  const newListContextValue = list.concat(bulletsGroup)
  const gridTypeClassDesktop = `grid__desktop__${gridTypeDesktop}`
  const gridTypeClassMobile = `grid__mobile__${gridTypeMobile}`

  console.log('gridTypeClassMobile',gridTypeClassMobile)


  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
          <div className={`${handles.grid_container_mobile } ${styles[gridTypeClassMobile]}`}>{bulletsGroup}</div>
        :
          <div className={`${handles.grid_container} ${styles[gridTypeClassDesktop]}`}>{bulletsGroup}</div>
      }
    </ListContextProvider>
  );
};

CustomGrid.schema = customGridSchema

export default CustomGrid;
