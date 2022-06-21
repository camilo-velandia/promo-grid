import React from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import {useDevice} from 'vtex.device-detector'
import {useCssHandles} from 'vtex.css-handles';
import {CustomGridSchema} from './CustomGridTypes'
import { getItemsAsTSXList } from './ItemAsList'

export interface CustomGridProps{
  items: CustomGridSchema
}

const CustomGrid = ({items}:CustomGridProps) => {

  const CSS_HNDLES=["grid_container","grid_container_mobile"]
  const handles = useCssHandles(CSS_HNDLES)
  const { isMobile } = useDevice()
  const {list} = useListContext() || []
  const bulletsGroup = getItemsAsTSXList(items)
  const newListContextValue = list.concat(bulletsGroup)

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
          <div className={handles.grid_container_mobile}>{bulletsGroup}</div>
        :
          <div className={handles.grid_container}>{bulletsGroup}</div>
      }
    </ListContextProvider>
  );
};

export default CustomGrid;
