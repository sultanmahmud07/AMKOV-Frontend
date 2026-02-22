
export default async function Products({searchParams}: {searchParams: {type?: string}}) {
  const {type} = await searchParams;
  console.log(type)
  return (
    <div>
    <h3>Products</h3>
    </div>
  );
}
