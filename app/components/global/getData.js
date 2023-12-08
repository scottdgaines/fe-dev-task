export default async function getData() {
  const response = await fetch("http://localhost:4000/faqs");
  const data = response.json();
  return data
}
