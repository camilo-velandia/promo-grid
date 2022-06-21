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
