import { Card, CardContent, Popover, Typography } from '@mui/material'
import Image from 'next/image'
import React, { MouseEvent, useEffect, useState } from 'react'
import { getTypeByName } from '../api'
import { LinkItem, TypeResource } from '../constants/interfaces'

interface TypeBadgeProps {
  type: LinkItem
}

const TypeBadge = (props: TypeBadgeProps) => {
  const [badgeData, setBadgeData] = useState<TypeResource>(undefined)
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const loadBadgeData = () => {
    if (props.type !== undefined) {
      getTypeByName(props.type.name).then(({ data }) => setBadgeData(data))
    }
  }

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);

  useEffect(() => {
    loadBadgeData();
  })

  return (
    <>
      {props.type ?
        (

          <div
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Image
              src={`https://veekun.com/dex/media/types/en/${props.type.name}.png?w=30&h=30&fit=crop&auto=format`}
              alt={props.type.name}
              loading="lazy"
            />
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              disableRestoreFocus
            >
              {badgeData ?
                (
                  <Card>
                    <CardContent>
                      <Typography component="p" color="initial">
                        {badgeData.name}  
                      </Typography>
                    </CardContent>
                  </Card>
                ) : ""}
            </Popover>
          </div>
        ) : ""
      }
    </>
  )
}

export default TypeBadge