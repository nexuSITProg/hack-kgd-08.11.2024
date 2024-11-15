import './LeftMenu.style.scss';
import { Logo } from '@components/Logo/Logo';
import { Navigation } from '@components/Navigation/Navigation';
import { UserBlock } from '@components/UserBlock/UserBlock';

export const LeftMenu = () => {
  return (
    <div className="left-menu">
      <div className="left-menu__content">
        <Logo />
        <Navigation />
      </div>
      <div className="left-menu__footer">
        <UserBlock />
      </div>
    </div>
  )
}