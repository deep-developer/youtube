import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'
import { Provider } from 'react-redux';
import store from './Utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/Body/MainContainer/MainContainer';
import Watchpage from './Components/Watchpage/Watchpage';
import SearchResultsPage from './Components/SearchResultsPage/SearchResultsPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: '/watch',
        element: <Watchpage/> 
      }
    ]
  },
  {
    path: '/results',
    element: <SearchResultsPage/>
  }
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
