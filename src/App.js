import Container from "@mui/material/Container";
import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe } from "./redux/slices/auth";

function App() {

  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/posts/:id" element={ <FullPost /> } />
          <Route path="/posts/:id/edit" element={ <AddPost /> } />
          <Route path="/add-post" element={ <AddPost /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Registration /> } />
           <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
