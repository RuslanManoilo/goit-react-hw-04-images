import { LoadMoreButton } from "./Button.styled";

export const LoadMoreBtn = ({onLoadMore}) => {
    return (
        <LoadMoreButton onClick={onLoadMore}>Load More</LoadMoreButton>
    );
};