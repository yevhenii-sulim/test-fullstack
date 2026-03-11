import {NavLink} from '@/components/navLink';
import {JSX} from 'react';

interface Props {
  links: {href: string; page: string}[];
  style: string;
}

export default function Navigation({links, style}: Props): JSX.Element {
  return (
    <nav className={style}>
      {links.map(({page, href}) => (
        <NavLink href={href} page={page} key={href} />
      ))}
    </nav>
  );
}
