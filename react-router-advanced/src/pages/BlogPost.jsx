import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams(); // Get dynamic ID from the URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>Displaying content for blog post ID: {id}</p>
    </div>
  );
}
