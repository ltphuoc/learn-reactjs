import { useRef } from 'react';

const Search = (props) => {
  const { onSubmit, searchTerm, setSearchTerm } = props;
  // const [searchTerm, setSearchTerm] = useState('');
  const typingTimeout = useRef(null);

  const onSearchChange = (e) => {
    const valueSearch = e.target.value;

    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    typingTimeout.current = setTimeout(() => {
      setTimeout(() => {
        setSearchTerm(valueSearch);
      }, 300);

      const formValues = {
        searchTerm: valueSearch,
      };
      onSubmit(formValues);
    }, 300);
  };
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search post by title"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </form>
  );
};

export default Search;
