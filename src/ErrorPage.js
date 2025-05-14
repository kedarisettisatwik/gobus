import Error404 from "../src/stock/Error404.png";

function errorPage() {
  console.log("hello");
  return (
    <div>
      <img src={Error404} alt="travel" width='50vw'></img>
      hello
    </div>
  );
}

export default errorPage;
