import Layout from "../../components/Layout/Layout";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((blog) => {
    return { params: { slug: blog.id.toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const url = context.params.slug;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + url + "/posts"
  );
  const data = await res.json();

  return {
    props: { blog: data },
  };
};

const BlogPage = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h1>Blog</h1>
      <div>By {blog.title}</div>
    </div>
  );
};

export default BlogPage;

BlogPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
