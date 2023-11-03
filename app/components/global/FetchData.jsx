import React from "react";

async function getData() {
  const response = await fetch("http://localhost:4000/faqs");
  return response.json();
}

export default async function FetchData() {
  const data = await getData();
  console.log(data);
  return <div>FetchData</div>;
}
