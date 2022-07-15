const customGridSchema ={
  title: "Grilla Custom",
  type:"object",
  properties:{
    gridTypeDesktop:{
      title:"Tipo de grilla Desktop",
      type:"number",
      enum:[1,2,3,4]
    },
    gridTypeMobile:{
      title:"Tipo de grilla Mobile",
      type:"number",
      enum:[1,2,3,4,5,6]
    }
  }
}


export default customGridSchema
