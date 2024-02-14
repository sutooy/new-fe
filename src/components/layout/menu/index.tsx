'use client'
import { PopupMenu, PopupMenuItem } from '@/components/shared/popup-menu/index'
import { useTranslation } from '@/i18n/client'
import { NAMESPACE_OPTIONS } from '@/i18n/settings'
import { Dashboard, ExpandLess, ExpandMore, Groups } from '@mui/icons-material'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from '@mui/material'
import Collapse from '@mui/material/Collapse'
import Tooltip from '@mui/material/Tooltip'
import { TFunction } from 'i18next'
import { useRouter } from 'next/dist/client/components/navigation'
import React, { useState } from 'react'
import { Style } from './index.css'
type Props = {
  // 開閉フラグ
  isMin: boolean
}

type SubMenu = {
  title: string
  path: string
  disabled: boolean
}

type Menu = {
  title: string
  path?: string
  icon: React.ReactElement<SvgIconProps>
  disabled: boolean
  subMenu: SubMenu[]
}

// ポップアップメニュー用にリンク情報を詰めなおす
const createLinkList = (subMenu: SubMenu[]): PopupMenuItem[] => {
  const linkList: PopupMenuItem[] = []
  for (const item of subMenu) {
    if (!item.disabled) {
      linkList.push({
        linkText: item.title,
        path: item.path,
      })
    }
  }
  return linkList
}

// i18nでのメニュー作成
const createMenu = (
  menuT: TFunction<string | readonly string[], 'metadata'>
) => {
  return [
    {
      title: menuT('dashboard.mainMenu'),
      path: '/dashboard',
      icon: <Dashboard className={Style.iconSvg} />,
      disabled: false,
      subMenu: [],
    },
    {
      title: menuT('customer.mainMenu'),
      icon: <Groups className={Style.iconSvg} />,
      disabled: false,
      subMenu: [
        {
          title: menuT('customer.subMenu.customer'),
          path: '/customer',
          disabled: false,
        },
        {
          title: menuT('customer.subMenu.application'),
          path: '/application',
          disabled: false,
        },
      ],
    },
    {
      title: menuT('bookingManagement.mainMenu'),
      icon: <Groups className={Style.iconSvg} />,
      disabled: false,
      subMenu: [],
    },
    {
      title: menuT('vehicleManagement.mainMenu'),
      icon: <Groups className={Style.iconSvg} />,
      disabled: false,
      subMenu: [
        {
          title: menuT('vehicleManagement.subMenu.vehicleManagement'),
          path: '/vehicle',
          disabled: false,
        },
        {
          title: menuT('vehicleManagement.subMenu.wirelessGPSList'),
          path: '/GPS',
          disabled: false,
        },
      ],
    },
  ]
}

export const Menu: React.FC<Props> = ({ isMin }: Props) => {
  const router = useRouter()

  // メニューリスト
  const { t: menuT } = useTranslation(NAMESPACE_OPTIONS.systemMenu)
  const menuList = createMenu(menuT)

  // サブメニュー開閉フラグ
  const [openSubMenu, setOpenSubMenu] = useState<boolean[]>(
    new Array<boolean>(Menu.length).fill(false)
  )

  // サブメニュー開閉トグル
  const handleClick = (item: Menu, index: number) => {
    if (item.path) {
      router.push(item.path)
    }
    // コピーでないと更新できない
    const newState = openSubMenu.concat()
    newState.splice(index, 1, !newState[index])
    setOpenSubMenu(newState)
  }

  // ツールチップ表示判定
  const isShowTooltip = (menu: Menu): boolean => {
    return isMin && menu.subMenu.length === 0
  }

  return (
    <div className={Style.menu}>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {menuList.map((main: Menu, mainIndex: number) => (
          <div key={main.title}>
            {/* メインメニュー */}
            <ListItem button onClick={() => handleClick(main, mainIndex)}>
              {isShowTooltip(main) && (
                <Tooltip title={main.title} arrow placement="right">
                  <ListItemIcon className={`${Style.icon}`}>
                    {main.icon}
                  </ListItemIcon>
                </Tooltip>
              )}
              {!isShowTooltip(main) && (
                <ListItemIcon className={`${Style.icon}`}>
                  {!isMin && main.icon}
                  {isMin && main.subMenu.length > 0 && (
                    <PopupMenu items={createLinkList(main.subMenu)}>
                      {main.icon}
                    </PopupMenu>
                  )}
                </ListItemIcon>
              )}
              {!isMin && (
                <ListItemText primary={main.title} className={Style.text} />
              )}
              {main.subMenu.length > 0 &&
                !isMin &&
                (openSubMenu[mainIndex] ? (
                  <ExpandLess className={Style.iconSvg} />
                ) : (
                  <ExpandMore className={Style.iconSvg} />
                ))}
            </ListItem>
            {/* サブメニュー */}
            {!isMin && (
              <Collapse
                in={openSubMenu[mainIndex]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {main.subMenu.map((sub: SubMenu, index: number) => (
                    <ListItem
                      key={sub.title}
                      button
                      sx={{
                        '&.MuiListItem-root': {
                          width: '100%',
                          maxWidth: 360,
                          paddingLeft: '46px',
                        },
                      }}
                    >
                      <ListItemText primary={sub.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </div>
  )
}
