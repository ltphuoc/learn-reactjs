function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRow } = pagination;
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className="pagination">
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <button
        disabled={_page >= Math.ceil(_totalRow / _limit)}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
