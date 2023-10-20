import { useEffect, useState } from "react";
import { fetchImages } from "./Api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ErrorMessage, Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./Button/Button";
import { Wrapper } from "./GlobalStyle";

export const App = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (input === '' && page === 1) {
      return;
    };

    async function addImages() {
      try {
        setLoading(true);
        setError(false);

        const newImages = await fetchImages(input, page);
        const { hits, totalHits } = newImages;

        setImages(prevState => ([...prevState, ...hits]));
        setLoadMore(page < Math.ceil(totalHits / 12));

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    addImages();

  }, [input, page])

  const getInput = value => {
    setImages([]);
    setInput(value);
    setPage(1);
  };

  const getNewPage = () => {
    setPage(prevState => (prevState + 1));
  };

  return (
    <Wrapper>
      <Searchbar getInput={getInput} />
      {loading && <Loader />}
      <ImageGallery images={images} />
      {error && <ErrorMessage />}
      {loadMore && <LoadMoreBtn onLoadMore={getNewPage} />}
    </Wrapper>
  );
};