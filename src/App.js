import "./App.css";
import Loader from "./hooks/useInfiniteScroll";

function App() {
  const data = Loader();

  return (
    <div className="App">
      <div>
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id} className="card">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="card-img"
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
