import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore} from "redux-persist";

import TabsContainer from "./modules/Tabs/containers/TabsContainer";
import { Routes } from "./Routes";
import { PersistGate } from "redux-persist/integration/react";

import Store from "./configStore";

const App = () => {
  const store = Store.getInstance();
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <React.Fragment>
            <TabsContainer />
            <Routes />
          </React.Fragment>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
