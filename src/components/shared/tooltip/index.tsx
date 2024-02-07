'use client'
import Tooltip from "@mui/material/Tooltip";
import { withStyles } from "@mui/styles";
import React from 'react';

type Props = {
  // トリガー要素（StyledTooltipの型制約でReactNodeがダメなのでchiddenは使えない）
  dom: React.ReactElement<any, any>
  // tooltip文字
  text: string
  // 表示位置
  position: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined
  // 文字色
  color?: string,
  // 文字サイズ
  fontSize?: string,
  // 背景色
  background?: string,
  // 余白
  padding?:string
}


export const Tooltips: React.FC<Props> = ({ dom, text, position, color, fontSize, background, padding}: Props) => {
  const StyledTooltip = withStyles({
    popperArrow: {
      '&[data-popper-placement*="top"],&[data-popper-placement*="right"],&[data-popper-placement*="left"],&[data-popper-placement*="bottom"]': {
        "& $tooltip": {
          color: color || "#fff",
          fontSize: fontSize || "14px",
          background: background || "#000",
          padding: padding || "5px 10px",
        },
        "& $arrow": {
          fontSize: "10px",
          color: "#000"
        }
      }
    },
    // この2行消すとstyleが効かなくなるので消さない
    tooltip: {},
    arrow: {}
  })(Tooltip);

  return (
    <StyledTooltip arrow title={text} placement={position}>
      {dom}
    </StyledTooltip>
  )
}
