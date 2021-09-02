import { GlobalStyles } from './components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';

export const App = () => {
 return (
  <>
   <GlobalStyles />
   <HashRouter>
    <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="*" component={NotFoundPage} />
    </Switch>
   </HashRouter>
  </>
 );
};
