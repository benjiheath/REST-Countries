import GlobalStyle from './globalStyles';
import { useEffect, useState } from 'react';
import { useGlobalContext } from './context/AppContext';
import { Header, Home, CountryInfo, NotFound, Spinner } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from './components/containers';

function App() {
  const { theme, loading, countries } = useGlobalContext();
  const [invalidUrl, setInvalidUrl] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Container theme={theme}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/countries/:id' exact>
              {invalidUrl && <NotFound country setInvalidUrl={setInvalidUrl} />}
              {loading && <Spinner />}
              {!loading && countries && <CountryInfo setInvalidUrl={setInvalidUrl} />}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
