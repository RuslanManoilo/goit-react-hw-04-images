import { Formik } from 'formik';
import { ImSearch } from "react-icons/im";
import * as Yup from 'yup';
import { ErrorNotification, SearchBar, SearchBtn, SearchForm, SearchFormInput } from './Searchbar.styled';

const formSchema = Yup.object().shape({
    searchValue: Yup.string()
        .min(2, 'Too Short!')
        .required('This field is required!'),
});

export const Searchbar = ({getInput}) => {
    return (
        <SearchBar>
            <Formik
                initialValues={{
                    searchValue: '',
                }}
                onSubmit={(values, actions) => {
                    getInput(values.searchValue);
                    actions.resetForm();
                }}
                validationSchema={formSchema}
            >
                <SearchForm>
                    <SearchBtn type="submit">
                        <ImSearch />
                    </SearchBtn>

                    <SearchFormInput
                        name="searchValue"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <ErrorNotification name="searchValue" component="div" />

                </SearchForm>
            </Formik>
        </SearchBar>
    );
};