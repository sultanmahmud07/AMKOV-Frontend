
export default async function Categories({searchParams}: {searchParams: {type?: string}}) {
  const {type} = await searchParams;
  console.log(type)
  return (
    <div>
    <h3>Categories</h3>
    </div>
  );
}
