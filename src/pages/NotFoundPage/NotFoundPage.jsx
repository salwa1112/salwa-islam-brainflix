import './NotFoundPage.scss';
import PageNotFoundSVG from '../../assets/images/not-found.png';

function NotFoundPage() {

    return (
        <div>
            <img className='page-not-found__image' src={PageNotFoundSVG} alt="Page Not Found 404" />
        </div>
    )
}

export default NotFoundPage;