import NavItem from "../components/NavItem";
import classnames from "classnames";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-end space-x-10",
    vertical: "flex-col space-y-12 px-10 justify-center items-start h-full",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem scheme={scheme} href="/">
        Beranda
      </NavItem>
      <NavItem scheme={scheme} href="/profile-sekolah">
        Profile Sekolah
      </NavItem>
      <NavItem scheme={scheme} href="/program-keahlian">
        Program Keahlian
      </NavItem>
      <NavItem scheme={scheme} href="/tenaga-pendidik">
        Tenaga Pendidik
      </NavItem>
      <NavItem scheme={scheme} href="/galeri">
        Galeri
      </NavItem>
      <NavItem scheme={scheme} href="/artikelt">
        Artikel
      </NavItem>
    </ul>
  );
}
