export type CustomGridSchema = Array<{
  name: string
  title: string
  description?: string
  link?: LinkProps
  image: string
}>

export interface LinkProps{
  url:string
  text:string
  attributeNofollow?:boolean
  attributeTitle?:string
  openNewTab?:boolean
  newTab?:boolean
}

export interface CustomGridProps{
  gridItem: CustomGridSchema
  gridTypeDesktop: number
  gridTypeMobile: number
}

export type CardItemProps = {
  src: string
  titleItem: string
  link: LinkProps
  description: string
}
