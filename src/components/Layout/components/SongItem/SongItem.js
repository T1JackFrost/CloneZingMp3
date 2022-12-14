import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';

import { useStore } from '~/store';

const cx = classNames.bind(styles);

function SongItem({ data, onClick, hideAlbum }) {
    const [state, dispatch] = useStore();
    const { songId } = state;

    return (
        <div className={cx('song-item', songId === data.encodeId && 'song-item-active')} onClick={onClick}>
            {!hideAlbum ? <FontAwesomeIcon icon={faMusic} className={cx('song-icon')} /> : ''}
            <div className={cx('song-info')}>
                <div className={cx('song-thumb')}>
                    <div className={cx('song-action')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <img className={cx('img')} src={data.thumbnailM} alt={data.thumbnail} />
                </div>
                <div className={cx('name')}>
                    <h3 className={cx('title')}>{data.title}</h3>
                    <p className={cx('artist')}>{data.artistsNames}</p>
                </div>
            </div>
            <div className={cx('album', hideAlbum && 'album-hide')}>
                <Link to={`/album/${data?.album?.encodeId}`} className={cx('album-title')}>
                    {data?.album?.title}
                </Link>
            </div>
            <span className={cx('time')}>
                {'0' + Math.floor(data.duration / 60)}:
                {Math.floor(data.duration % 60) < 10
                    ? '0' + Math.floor(data.duration % 60)
                    : Math.floor(data.duration % 60)}
            </span>
        </div>
    );
}

export default SongItem;
