import loader from '../../assets/images/loading.gif';

export const Loading = () => {
    return (
        <div className="loading">
            <img className="loading-img" src={loader} />
        </div>
    );
}