// Language

import { Dispatch } from 'react'

export const changeLang = (lang: string) => {
  if (lang === 'en') {
    return (dispatch: Dispatch<{ type: string; payload: string }>) => {
      window.location.reload()
      dispatch({
        type: 'en',
        payload: lang,
      })
    }
  } else {
    return (dispatch: Dispatch<{ type: string; payload: string }>) => {
      window.location.reload()
      dispatch({
        type: 'id',
        payload: lang,
      })
    }
  }
}

// Sidebar
export const changeSidebar = (sidebar: string) => {
  if (sidebar === 'change') {
    return (dispatch: Dispatch<{ type: string; payload: string }>) => {
      dispatch({
        type: 'change',
        payload: sidebar,
      })
    }
  }
}

// Resize (table into card)

export const changeSize = (size: string) => {
  if (size === 'resize') {
    return (dispatch: Dispatch<{ type: string; payload: string }>) => {
      dispatch({
        type: 'resize',
        payload: size,
      })
    }
  }
}

// Switch table

export const switchTable = (table: string) => {
  if (table === 'change') {
    return (dispatch: Dispatch<{ type: string }>) => {
      dispatch({
        type: 'SWITCH_TABLE',
      })
    }
  }
}

// Auto Update

export const autoUpdate = (isUpdate: boolean) => {
  if (isUpdate === true) {
    return (dispatch: Dispatch<{ type: string }>) => {
      dispatch({
        type: 'UPDATE',
      })
    }
  }
}
