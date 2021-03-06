export default function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className="pagination">
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      {/* {listPage !== 0 &&
        listPage.map((item, index) => {
          return <span key={index}>{item}</span>;
        })} */}
      <button
        disabled={_page >= Math.ceil(_totalRows / _limit)}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}
