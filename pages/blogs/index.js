import Link from "next/link";
import Layout from "../../components/Layout/Layout";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

const Blogs = ({ blogs }) => {
  console.log(blogs);

  return (
    <div>
      <h1>All blogs</h1>
      {blogs.map((blog) => (
        <Link href={"/blogs/" + blog.id} key={blog.id}>
          <a>
            <h3>{blog.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;

Blogs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
