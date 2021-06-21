import { Link } from 'react-router-dom';

export default function Book({ data }) {
  return (
    <div className="col-3 book">
      <div className="book-desc">
        <Link to='/users' className="name">{data.name}</Link>
      </div>
    </div>
  );
}
