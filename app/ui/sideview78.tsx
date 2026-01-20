"use client";

import { usePathname } from "next/navigation";
import { IconCylinder, IconGraph, IconSphere } from "@tabler/icons-react";
import classes from "./sideview.module.css";
import Link from "next/link";

interface NavItem {
  label: string;
  icon?: React.ComponentType<any>;
  link?: string;
  children?: NavItem[];
}

const data: NavItem[] = [
  {
    label: "Körper",
    icon: IconSphere,
    children: [
      { link: "/klasse78/koerper/einfuehrung", label: "Einführung" },
      { link: "/klasse78/koerper/prismen", label: "Prismen" },
      { link: "/klasse78/koerper/zylinder", label: "Zylinder" },
      {
        link: "/klasse78/koerper/zusammengesetzte_koerper",
        label: "Zusammengesetzte Körper",
      },
    ],
  },
  {
    label: "Ebene Figuren",
    icon: IconCylinder,
    children: [
      { link: "/klasse78/ebene_figuren/einfuehrung", label: "Einführung" },
      { link: "/klasse78/ebene_figuren/dreiecke", label: "Dreiecke" },
      { link: "/klasse78/ebene_figuren/vierecke", label: "Vierecke" },
      { link: "/klasse78/ebene_figuren/kreise", label: "Kreise" },
    ],
  },
  {
    link: "/klasse78/wachstumsprozesse",
    label: "Wachstumsprozesse",
    children: [
      { link: "/klasse78/wachstumsprozesse/einfuehrung", label: "Einführung" },
      {
        link: "/klasse78/wachstumsprozesse/anti-proportionale_funktionen",
        label: "(Anti-)Proportionale Funktionen",
      },
      {
        link: "/klasse78/wachstumsprozesse/lineare_funktionen",
        label: "Lineare Funktionen",
      },
    ],
  },
];

export function Sideview78() {
  const pathname = usePathname();

  const renderNavItem = (item: NavItem, level = 0) => {
    if (item.children) {
      return (
        <div key={item.label}>
          <div
            className={classes.link}
            style={{ paddingLeft: `${level * 16}px` }}
          >
            {item.icon && (
              <item.icon className={classes.linkIcon} stroke={1.5} />
            )}
            <span>{item.label}</span>
          </div>
          <div>
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        </div>
      );
    } else if (item.link) {
      return (
        <Link
          className={classes.link}
          data-active={pathname === item.link || undefined}
          href={item.link}
          key={item.label}
          style={{ paddingLeft: `${level * 16}px` }}
        >
          {item.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
          <span>{item.label}</span>
        </Link>
      );
    }
    return null;
  };

  const links = data.map((item) => renderNavItem(item));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
