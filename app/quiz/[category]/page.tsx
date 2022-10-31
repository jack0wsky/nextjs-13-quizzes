"use client";

const Page = ({ params }: { params: { category: string } }) => {
  console.log(params);
  return <div>category {params.category}</div>;
};

export default Page;
