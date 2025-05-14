import Error404 from "../src/stock/Error404.png";

function errorPage() {
  return (
    <div>
      <img src={Error404} alt="travel" width='200px'></img>
    </div>
  );
}

export default errorPage;
