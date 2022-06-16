import React from "react";
import Link from "next/link";
import useStyles from "../hooks/sidebar/useStyles";
import useLocalData from "../hooks/sidebar/useData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function Sidebar() {
  const {
    fontDisplay,
    customStyle,
    linkDivStyle,
    imageWidth,
    subMenuLinkDivStyle,
  } = useStyles();
  const { sidebarMenuList, handleShow, show } = useLocalData();
  return (
    <div className={customStyle}>
      {sidebarMenuList.map((sidebar, index) => (
        <Link key={index} href={sidebar.link}>
          <div className={linkDivStyle}>
            <img className={imageWidth} src={sidebar.icon} alt={sidebar.icon} />
            <div className={fontDisplay}> {sidebar.name} </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

{
  /* <Link href="/">
<>
  <div className={linkDivStyle}>
    <img className={imageWidth} src="/dashboard.png" />
    <div className={fontDisplay}> Dashboard </div>
    <div onClick={handleShow}>
      <ArrowDownwardIcon className={fontDisplay} />
    </div>
  </div>
  {show ? (
    <div className="bg-slate-200 mt-1">
      <div className={linkDivStyle}>
        <img className={imageWidth} src="/dashboard.png" />
        <div className={fontDisplay}> Sub Menu 1 </div>
      </div>
      <div className={linkDivStyle}>
        <img className={imageWidth} src="/dashboard.png" />
        <div className={fontDisplay}> Sub Menu 2 </div>
      </div>
      <div className={linkDivStyle}>
        <img className={imageWidth} src="/dashboard.png" />
        <div className={fontDisplay}> Sub Menu 3 </div>
      </div>
    </div>
  ) : (
    ""
  )}
</>
</Link> */
}
