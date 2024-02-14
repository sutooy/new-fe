'use client'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import DefaultProfileIcon from '@/images/icon/default-profile.png'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { Menu, MenuItem, SvgIconProps } from '@mui/material'
import { TFunction } from 'i18next'
import Image from 'next/image'
import React from 'react'
import { MenuStyle, Style } from './index.css'

type Menu = {
  title: string
  icon: React.ReactElement<SvgIconProps>
  action: () => void
}

export const ProfileMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  // メニューを開く
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  // メニューを閉じる
  const handleCloseMenu = (closeAction?: () => void) => {
    setAnchorEl(null)
    if (closeAction) {
      closeAction()
    }
  }

  // ログアウト処理
  const logout = () => {
    alert('todo logout')
  }

  // i18nでのメニュー作成
  const createMenu = (
    menuT: TFunction<string | readonly string[], 'metadata'>
  ) => {
    return [
      {
        title: menuT('logout'),
        icon: <PowerSettingsNewIcon />,
        action: logout,
      },
    ]
  }

  // メニューリスト
  const { t: menuT } = useTranslation(NAMESPACE_OPTIONS.profileMenu)
  const menuList = createMenu(menuT)

  return (
    <div>
      <div className={Style.imgBox}>
        <Image
          src={DefaultProfileIcon}
          width={41}
          height={41}
          alt="profile"
          onClick={handleOpenMenu}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        />
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => handleCloseMenu()}
        onClick={() => handleCloseMenu()}
        PaperProps={{
          elevation: 0,
          className: MenuStyle.menu,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiList-root': {
              padding: 0,
            },
            '& .MuiButtonBase-root': {
              borderRadius: '4px',
              padding: '5px 12px',
              display: 'flex',
              gap: '5px',
            },
            '& .MuiSvgIcon-root': {
              fontSize: '18px',
              fontWeight: 'bold',
            },

            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuList.map((menu: Menu) => (
          <MenuItem
            onClick={() => handleCloseMenu(menu.action)}
            className={MenuStyle.menuItem}
          >
            {menu.icon}
            {menu.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
