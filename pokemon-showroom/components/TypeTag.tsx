import React from 'react'
import Button from '@mui/material/Button'

interface TypeTagProps{
    typeName: string
}

const TypeTag = (props: TypeTagProps) => {
  return (
    <div className="type-tag">
        {props.typeName}
    </div>
  )
}

export default TypeTag