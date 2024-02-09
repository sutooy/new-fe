'use client'
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';

import { PopupMenu, PopupMenuItem } from '@/components/shared/popup-menu/index';
import { Tooltips } from '@/components/shared/tooltip/index';
import Collapse from '@material-ui/core/Collapse';
import { Style } from './index.css';


import { useRouter } from 'next/dist/client/components/navigation';
type Props = {
  // 開閉フラグ
  isMin: boolean
}

type SubMenu = {
  titleEN: string
  titleID: string
  path: string
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

// ポップアップメニュー用にリンク情報を詰めなおす
const createLinkList = (subMenu: SubMenu[]): PopupMenuItem[] => {
  const linList: PopupMenuItem[] = []
  for (const item of subMenu) {
    if (!item.disabled){
      linList.push({
        linkText: item.titleEN,
        path: item.path
      })
    }
  }
  return linList
}

export const Menu: React.FC<Props> = ( {isMin }: Props) => {
  const router = useRouter();

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
        {mainMenu.map((main: Menu, mainIndex: number) => ( 
          <div key={main.titleEN}>
            {/* メインメニュー */}
            <ListItem button onClick={() => handleClick(main, mainIndex)}>
              {isShowTooltip(main) &&
                <ListItemIcon className={`${Style.icon} ${!isMin && Style.minIcon}`}>
                
                  <Tooltips text={main.titleEN} position="left" dom={main.icon} />
                </ListItemIcon>
              }
              {!isShowTooltip(main) &&
                <ListItemIcon className={`${Style.icon} ${!isMin && Style.minIcon}`}>
                  <PopupMenu items={createLinkList(main.subMenu)}>{main.icon}</PopupMenu>
                </ListItemIcon>
              }
              
              {isMin && <ListItemText primary={main.titleEN} />}
              {(main.subMenu.length > 0 && isMin) && (
                openSubMenu[mainIndex] ? <ExpandLess className={Style.iconSvg} /> : <ExpandMore className={Style.iconSvg} />
              )}
            </ListItem>
            {/* サブメニュー */}
            {isMin &&
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
