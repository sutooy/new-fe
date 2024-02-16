'use client'
import { Menu, MenuItem } from "@mui/material";
import Link from "@mui/material/Link";
import React, { useState } from 'react';

export type PopupMenuItem = {
  // パス
  path: string
  // リンクテキスト
  linkText: string
  // 開き方
  target?: '_blank'
}

type Props = {
  children: React.ReactNode
  // リンク情報
  items: PopupMenuItem[]
}


export const PopupMenu: React.FC<Props> = ({ children, items}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        id="menu-app-bar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {items.map((item: PopupMenuItem, index: number) => ( 
          <MenuItem key={index.toString()}>
            <Link sx={{ color: '#000', fontSize:"14px" }} href={item.path} target={item.target || '_self'} underline="none">
              {item.linkText}
            </Link>
          </MenuItem>
        ))}
      </Menu>
      <div onMouseOver={handleMenu}>
        {children}
      </div>
      
    </>
  )
}
