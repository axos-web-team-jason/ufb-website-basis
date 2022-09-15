import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import ufbLogo from "../../assets/ufb-w-logo.png";
import profileIcon from "../../assets/user-icon.png";
import { useRouter } from "next/router";
import ActiveLink from "../../utils/ActiveLink";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const navItems = ["savings", "mortgages", "support"];
  const router = useRouter();

  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  };

  const printNavItemsDesktop = () => {
    return navItems.map((navs, index) => {
      return (
        <li
          key={navs}
          className={`${styles.navItem} ${
            router.asPath === "/" ? styles.navItem : styles.navItem
          }`}
        >
          <Link href={`/${navs}`} passHref>
            <a className={`${styles.linkColor} `}>
              {navs.charAt(0).toUpperCase() + navs.slice(1)}
            </a>
          </Link>
        </li>
      );
    });
  };

  const printNavItemsMobile = () => {
    return navItems.map((navs, index) => {
      return (
        <li key={navs} className={`${styles.mobileNavItem}`}>
          <Link href={`/${navs}`} passHref>
            {navs}
          </Link>
        </li>
      );
    });
  };

  const mobileStyleToggle = () => {
    const DEFAULT_NAV_COLOR = `${styles.navSection}`;
    const DEFAULT_NAV_LOGO = `${styles.imgContainer}`;
    const DEFAULT_NAV_LIST = `${styles.navList}`;
    const DEFAULT_NAV_STACK = ` ${styles.navStack}`;
    const DEFAULT_SIGN_BTN = `${styles.signIn}`;
    const DEFAULT_PROFILE_ICON = ``;
    let mobileStyles = {};

    mobileStyles = {
      navBg: `${!mobileNav ? `${DEFAULT_NAV_COLOR}` : `${styles.openMenu}`}`,
      navStackHidden: `${
        !mobileNav
          ? `${DEFAULT_NAV_STACK}`
          : `${DEFAULT_NAV_STACK} ${styles.hide}`
      }`,
      hideImg: `${
        !mobileNav
          ? `${DEFAULT_NAV_LOGO}`
          : `${DEFAULT_NAV_LOGO} ${styles.hide}`
      }`,
      hideImgBg: `${
        !mobileNav
          ? `${DEFAULT_NAV_LIST}`
          : `${DEFAULT_NAV_LIST}  ${styles.mobileNavColor}`
      }`,
      hideSignIn: `${
        !mobileNav
          ? `${DEFAULT_SIGN_BTN}`
          : `${DEFAULT_SIGN_BTN} ${styles.hide}`
      }`,
      profileIconHide: `${
        !mobileNav
          ? `${DEFAULT_PROFILE_ICON}`
          : `${DEFAULT_PROFILE_ICON} ${styles.hide}`
      }`,
    };

    return mobileStyles;
  };

  return (
    <nav className={mobileStyleToggle().navBg}>
      <div className={`${styles.navContainer}`}>
        <div>
          <div className={mobileStyleToggle().hideImgBg}>
            <div className={mobileStyleToggle().navStackHidden}>
              <a className={`${styles.navLineContainer}`} onClick={toggleMenu}>
                <span className={styles.navLine}></span>
              </a>
            </div>
            <div className={`${styles.navExitBlock}`}>
              <a className={`${styles.navExitContainer}`} onClick={toggleMenu}>
                <span className={styles.navExit}></span>
              </a>
            </div>
            <span className={mobileStyleToggle().hideImg}>
              <Image src={ufbLogo} width={192} height={32} />
            </span>
            {printNavItemsDesktop()}
          </div>
        </div>
        <div>
          <li className={mobileStyleToggle().hideSignIn}>
            <Link href="/" passHref>
              <a className={`${styles.signInLink}`}>Sign In</a>
            </Link>
          </li>
          <span
            className={`${styles.userProfile} ${
              mobileStyleToggle().profileIconHide
            }`}
          >
            <Link href="/" passHref>
              <a>
                <Image src={profileIcon} width={35} height={35} />
              </a>
            </Link>
          </span>
        </div>
      </div>

      {mobileNav ? (
        <div className={`${styles.mobileNavList}`}>{printNavItemsMobile()}</div>
      ) : (
        ""
      )}
    </nav>
  );
}
