'use client'
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Tooltips } from '@/components/shared/tooltip/index';
import Collapse from '@material-ui/core/Collapse';
import { Style } from './index.css';


import { useRouter } from 'next/dist/client/components/navigation';
type Props = {
  // 開閉フラグ
  isOpen: boolean
}

type SubMenu = {
  titleEN: string
  titleID: string
  path?: string
  cName: string
  disabled: boolean
}

type Menu = {
  titleEN: string
  titleID: string
  path?: string
  icon: React.ReactElement<SvgIconProps>
  cName: string
  disabled: boolean
  subMenu: SubMenu[],
}

const subMenu:SubMenu[] = [
{
    titleEN: "Customer",
    titleID: "Pelanggan",
    path: "/customer",
    cName: "nav-name",
    disabled: false,
  },
  {
    titleEN: "Application",
    titleID: "Permohonan",
    path: "/application",
    cName: "nav-name",
    disabled: false,
  },
]


const mainMenu:Menu[] = [
  {
      titleEN: "Homepage",
      titleID: "Homepage",
      path: "/",
    icon: <HomeOutlinedIcon className={Style.iconSvg}/>,
      cName: "nav-name",
      disabled: false,
      subMenu: [],
  },
  {
      titleEN: "Dashboard",
      titleID: "Menu Utama",
      path: "/main-menu",
      icon: <DashboardIcon  className={Style.iconSvg}/>,
      cName: "nav-name",
      disabled: false,
      subMenu: [],
  },
  {
    titleEN: "Customer",
    titleID: "Pelanggan",
    icon: <GroupsIcon  className={Style.iconSvg}/>,
    cName: "nav-name",
    disabled:false,
    subMenu: subMenu,
  },
  {
    titleEN: "aa",
    titleID: "bb",
    icon: <GroupsIcon  className={Style.iconSvg}/>,
    cName: "nav-name",
    disabled:false,
    subMenu: subMenu,
  },
]

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

export const Menu: React.FC<Props> = ( {isOpen }: Props) => {
  const router = useRouter();
  
  // i18nの言語推定の反映を待ち、hydration errorを避ける
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false)

  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])

  const classes = useStyles();
  
  const [openSubMenu, setOpenSubMenu] = useState<boolean[]>(new Array<boolean>(mainMenu.length).fill(false));

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
    if (isOpen) return true
    if (menu.subMenu.length === 0) return true
    return false
  }

  return (
    <div className={Style.menu}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader" 
      >
        {mainMenu.map((main: Menu, mainIndex: number) => ( 
          <div key={main.titleEN}>
            {/* メインメニュー */}
            <ListItem button onClick={() => handleClick(main, mainIndex)}>
              <ListItemIcon className={`${Style.icon} ${!isOpen && Style.minIcon}`}>
                {isShowTooltip(main) &&
                  <Tooltips text={main.titleEN} position="left" dom={main.icon} />
                }
                {!isShowTooltip(main) && main.icon}
              </ListItemIcon>
              {isOpen && <ListItemText primary={main.titleEN} />}
              {(main.subMenu.length > 0 && isOpen) && (openSubMenu[mainIndex] ? <ExpandLess className={Style.iconSvg}/> : <ExpandMore className={Style.iconSvg}/>)}
            </ListItem>
            {/* サブメニュー */}
            {isOpen &&
              <Collapse in={openSubMenu[mainIndex]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {main.subMenu.map((sub: SubMenu, index: number) => (
                    <ListItem key={sub.titleEN} button className={classes.nested}>
                      <ListItemText primary={sub.titleEN} />
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
