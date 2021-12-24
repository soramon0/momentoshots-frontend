import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { navigation } from "@/src/components/layout/NavbarItems";
import MenuItem, { menuItem } from "@/src/components/layout/SidebarItem";

interface Props {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
  route: string;
}

const SidebarItems: React.VFC<Props> = ({
  isMenuOpen,
  toggleMenuOpen,
  route,
}) => {
  return (
    <motion.ul
      variants={items}
      className="px-6 pt-16 w-80 fixed top-0 bottom-0"
    >
      {navigation.map((item, i) => (
        <MenuItem
          toggleMenuOpen={toggleMenuOpen}
          isMenuOpen={isMenuOpen}
          key={i}
          item={item}
          route={route}
        />
      ))}
      <motion.li
        className="px-8 py-4 absolute left-0 right-0 bottom-0 text-center"
        variants={menuItem}
      >
        <Link href="/">
          <a
            className="w-16 h-16 relative inline-block"
            onClick={toggleMenuOpen}
            tabIndex={!isMenuOpen ? -1 : 0}
          >
            <Image src="/images/logo.svg" alt="logo" layout="fill" />
          </a>
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default SidebarItems;

const items: Variants = {
  open: {
    visibility: "visible",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    visibility: "hidden",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
