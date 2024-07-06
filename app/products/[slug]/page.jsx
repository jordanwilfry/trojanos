export default function Page({ params }) {
  const { slug } = params;
  return <p>hello i am {slug} </p>;
}
