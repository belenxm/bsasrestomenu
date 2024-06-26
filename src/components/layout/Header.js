import React from "react";
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-lg" href={""}>
        BsAs Menu
      </Link>
      <nav className="flex gap-8 text-gray-700 font-semibold items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          className="bg-primary rounded-full text-white px-6 py-2"
          href={""}
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
