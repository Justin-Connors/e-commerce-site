import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//material ui theme imports
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Profile from "./pages/Profile";
import Auth from "./utils/auth";

//material ui darkTheme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

//material ui lightTheme
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const themeSelector = () => {
  if (localStorage.getItem("theme") === "dark") {
    return darkTheme;
  } else {
    return lightTheme;
  }
};

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={themeSelector}>
          <CssBaseline />
          <div>
            <Nav />
            <main>
              <Routes>
                <Route path="/" element={<Home title="E-Commerce" />} />
                <Route path="/login" element={<Login title="Log In" />} />
                <Route
                  path="/profile"
                  element={
                    Auth.loggedIn() ? <Profile /> : <Navigate replace to="/" />
                  }
                />
                <Route path="/signup" element={<Signup title="Sign Up" />} />
                <Route path="*" element={<NoMatch title="Error 404" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
