import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "제목",
      content: "내용",
      author: "한희",
    },
    {
      id: "2",
      title: "제목2",
      content: "내용2",
      author: "한희2",
    },
    {
      id: "3",
      title: "제목3",
      content: "내용3",
      author: "한희3",
    },
  ]);
  return (
    <Routes>
      <Route
        path="/"
        element={<Main posts={posts} setPosts={setPosts} />}
      ></Route>
      <Route
        path="/detail/:id"
        element={<Detail posts={posts} setPosts={setPosts} />}
      ></Route>
      <Route path="/create" element={<Create setPosts={setPosts} />}></Route>
      <Route path="/edit" element={<Edit setPosts={setPosts} />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
