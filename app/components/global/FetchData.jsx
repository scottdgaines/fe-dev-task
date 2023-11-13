async function getData() {
  const response = await fetch("http://localhost:4000/faqs");
  return response.json();
}

export default function FetchData() {
  return <div>FetchData</div>;
}
