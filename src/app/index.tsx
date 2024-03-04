import { RouterProvider } from "react-router-dom";

import { router } from "../pages";

import "./index.css";

const App = () => {
  return (
    // <Suspense fallback={<h1 style={{"color": "black"}}>Wait, loading...</h1>}>
    <div>
        <RouterProvider router={router}/>
    </div>
    // </Suspense>
  )
}

export default App;