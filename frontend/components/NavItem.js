import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ href, scheme, children }) {
  const router = useRouter();

  const schemes = {
    light: "text-gray-900",
    dark: "text-gray-50",
  };

  const active = router.pathname === href ? "font-bold" : "font-light";

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <Link href={href}>
        <a className={classnames("text-sm transition", pickedScheme, active)}>
          {children}
        </a>
      </Link>
    </li>
  );
}
