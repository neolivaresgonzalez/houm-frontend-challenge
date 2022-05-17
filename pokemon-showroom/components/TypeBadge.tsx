import React from 'react'

interface TypeBadgeProps {
  typeName: string
}

const TypeBadge = (props: TypeBadgeProps) => {
  return (
    <img
      src={`https://veekun.com/dex/media/types/en/${props.typeName}.png?w=30&h=30&fit=crop&auto=format`}
      alt={props.typeName}
      loading="lazy"
    />
  )
}

export default TypeBadge