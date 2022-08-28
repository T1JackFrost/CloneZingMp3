import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ icon, title, to, onClick }) {
    return (
        <NavLink onClick={onClick} to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
