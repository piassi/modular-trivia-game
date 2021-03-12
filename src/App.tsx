import { Provider } from 'react-redux';
import { Routes } from './Routes';
import { Layout } from './shared/components/Layout/Layout';
import { store } from './store';

function App() {
  return (
    <Layout>
      <Provider store={store()}>
        <Routes />
      </Provider>
    </Layout>
  );
}

export default App;
