import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const IndexPage = lazy(()=>import('./index-page/app'));
const CounterWithoutUseCallback = lazy(()=>import('./counter-without-use-callback/app'));
const CounterWithUseCallback = lazy(()=>import('./counter-with-use-callback/app'));

function App() {
  return (<Suspense fallback={<p>Page is loading ...1</p>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/counter-without-use-callback" element={<CounterWithoutUseCallback />} />
        <Route path="/counter-with-use-callback" element={<CounterWithUseCallback />} />
        
      </Routes>
    </BrowserRouter>
  </Suspense>);
}

export default App;
