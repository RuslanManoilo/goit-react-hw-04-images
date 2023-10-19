import { Component } from "react";
import { fetchImages } from "./Api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ErrorMessage, Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./Button/Button";
import { Wrapper } from "./GlobalStyle";

class App extends Component {
  state = {
    input: '',
    images: [],
    page: 1,
    loadMore: false,
    loading: false,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    const { input, page } = this.state;
    if (prevState.input !== input || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: false });

        const newImages = await fetchImages(input, page);
        const { hits, totalHits } = newImages;

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          loadMore: this.state.page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error: true })
      } finally {
        this.setState({ loading: false })
      }
    };
  }

  getInput = value => {
    this.setState({
      images: [],
      input: value,
      page: 1,
    })
  };

  getNewPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }))
  };

  render() {
    const { images, loading, loadMore, error } = this.state;
    return (
      <Wrapper>
        <Searchbar getInput={this.getInput} />
          {loading && <Loader />}
        <ImageGallery images={images} />
          {error && <ErrorMessage />}
        {loadMore && <LoadMoreBtn onLoadMore={this.getNewPage} />}
      </Wrapper>
    );
  }
};


export default App;