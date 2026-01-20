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
      { link: "/klasse910/koerper/einfuehrung", label: "Einführung" },
      { link: "/klasse910/koerper/pyramiden", label: "Pyramiden" },
      { link: "/klasse910/koerper/kegel", label: "Kegel" },
      { link: "/klasse910/koerper/kugeln", label: "Kugeln" },
    ],
  },
  {
    label: "Wachstumsprozesse",
    icon: IconGraph,
    children: [
      { link: "/klasse910/wachstumsprozesse/einfuehrung", label: "Einführung" },
      {
        link: "/klasse910/wachstumsprozesse/quadratische_funktionen",
        label: "Quadratische Funktionen",
      },
      {
        link: "/klasse910/wachstumsprozesse/potenzfunktionen",
        label: "Potenzfunktionen",
      },
      {
        link: "/klasse910/wachstumsprozesse/exponentialfunktionen",
        label: "Exponentialfunktionen",
      },
    ],
  },
];

export function Sideview910() {
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
