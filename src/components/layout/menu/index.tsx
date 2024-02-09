'use client'
import { PopupMenu, PopupMenuItem } from '@/components/shared/popup-menu/index';
import { Tooltips } from '@/components/shared/tooltip/index';
import { useTranslation } from '@/i18n/client';
import { NAMESPACE_OPTIONS } from '@/i18n/settings';
import Collapse from '@material-ui/core/Collapse';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { TFunction } from 'i18next';
import { useRouter } from 'next/dist/client/components/navigation';
import React, { useState } from 'react';
import { Style } from './index.css';
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
  subMenu: SubMenu[],
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

// ポップアップメニュー用にリンク情報を詰めなおす
const createLinkList = (subMenu: SubMenu[]): PopupMenuItem[] => {
  const linList: PopupMenuItem[] = []
  for (const item of subMenu) {
    if (!item.disabled){
      linList.push({
        linkText: item.title,
        path: item.path
      })
    }
  }
  return linList
}

// i18nでのメニュー作成
const createMenu = (menuT: TFunction<string | readonly string[], "metadata">) => {
  return [
    {
      title: menuT("homepage.mainMenu"),
      path: "/main-menu",
      icon: <DashboardIcon className={Style.iconSvg}/>,
      disabled: false,
      subMenu: [],
    },
    {
      title: menuT("dashboard.mainMenu"),
      path: "/main-menu",
      icon: <DashboardIcon className={Style.iconSvg}/>,
      disabled: false,
      subMenu: [],
    },
    {
      title: menuT("customer.mainMenu"),
      icon: <GroupsIcon className={Style.iconSvg}/>,
      disabled:false,
      subMenu: [
        {
          title: menuT("customer.subMenu.customer"),
          path: "/customer",
          disabled: false,
        },
        {
          title: menuT("customer.subMenu.application"),
          path: "/application",
          disabled: false,
        },
      ],
    },
    {
      title: menuT("bookingManagement.mainMenu"),
      icon: <GroupsIcon className={Style.iconSvg}/>,
      disabled:false,
      subMenu: [],
    },
    {
      title: menuT("vehicleManagement.mainMenu"),
      icon: <GroupsIcon className={Style.iconSvg}/>,
      disabled:false,
      subMenu: [
        {
          title: menuT("vehicleManagement.subMenu.vehicleManagement"),
          path: "/vehicle",
          disabled: false,
        },
        {
          title: menuT("vehicleManagement.subMenu.wirelessGPSList"),
          path: "/GPS",
          disabled: false,
        },
      ]
    },
  ]
}

export const Menu: React.FC<Props> = ( {isMin }: Props) => {
  const router = useRouter();

  const classes = useStyles();

  const { t: menuT } = useTranslation(NAMESPACE_OPTIONS.menu)
  const menuList = createMenu(menuT)
  
  const [openSubMenu, setOpenSubMenu] = useState<boolean[]>(new Array<boolean>(Menu.length).fill(false));

  const handleClick = (item: Menu, index: number) => {
    if (item.path) {
      router.push(item.path)
    }
    // コピーでないと更新できない
    const newState = openSubMenu.concat()
    newState.splice(index, 1, !newState[index])
    setOpenSubMenu(newState);
  };

  // ツールチップ表示判定
  const isShowTooltip = (menu: Menu): boolean => {
    if (isMin) return true
    if (menu.subMenu.length === 0) return true
    return false
  }

  return (
    <div className={Style.menu}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader" 
      >
        {menuList.map((main: Menu, mainIndex: number) => ( 
          <div key={main.title}>
            {/* メインメニュー */}
            <ListItem button onClick={() => handleClick(main, mainIndex)}>
              {isShowTooltip(main) &&
                <ListItemIcon className={`${Style.icon} ${!isMin && Style.minIcon}`}>
                
                  <Tooltips text={main.title} position="left" dom={main.icon} />
                </ListItemIcon>
              }
              {!isShowTooltip(main) &&
                <ListItemIcon className={`${Style.icon} ${!isMin && Style.minIcon}`}>
                  <PopupMenu items={createLinkList(main.subMenu)}>{main.icon}</PopupMenu>
                </ListItemIcon>
              }
              
              {isMin && <ListItemText primary={main.title} />}
              {(main.subMenu.length > 0 && isMin) && (
                openSubMenu[mainIndex] ? <ExpandLess className={Style.iconSvg} /> : <ExpandMore className={Style.iconSvg} />
              )}
            </ListItem>
            {/* サブメニュー */}
            {isMin &&
              <Collapse in={openSubMenu[mainIndex]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {main.subMenu.map((sub: SubMenu, index: number) => (
                    <ListItem key={sub.title} button className={classes.nested}>
                      <ListItemText primary={sub.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            }
          </div>
        ))}
      </List>
    </div>
  )
}
