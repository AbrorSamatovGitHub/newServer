import "./App.css";
import { MainLayout } from "./main-layout/main-Layout";
import appRouter from "./routes/app-router";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {appRouter.map(({ component, id, path }) => (
          <Route
            path={path}
            element={component}
            key={id}
            index={path ? false : true}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
