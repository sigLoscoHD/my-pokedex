import error from '../../assets/images/error.png';
import './ErrorPage.scss';

export const ErrorPage = () => {
    return (
        <div className="error-page">
            <img className="error-img" src={error} />
            <p className="error-message">Error! Refresh the page and try again...</p>
        </div>
    );
}