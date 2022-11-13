import Pagination from 'react-bootstrap/Pagination';

function Page() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item>{items}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

export default Page;
