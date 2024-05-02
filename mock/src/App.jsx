import { useState } from "react";
import UserCard from "./components/UserCard/component";

const App = () => {
  const [count, setCount] = useState(0);
  const user = {
    name: "sam",
    email: "sam.crider@aol.com",
    avatarUrl:
      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  };
  return (
    <div>
      <UserCard
        name={user.name}
        email={user.email}
        avatarUrl={user.avatarUrl}
      />
      <div>
        <div>Count: {count}</div>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
