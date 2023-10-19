import { ThreeDots } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
        />
    );
};

export const ErrorMessage = () => {
    return (
        <p>No internet connection!</p>
    );
};