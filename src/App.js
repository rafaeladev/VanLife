import {
    HashRouter,
    RouterProvider,
    createHashRouter,
    createRoutesFromElements,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const router = createHashRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="vans" element={<Vans />} loader={vansLoader} />
                <Route path="vans/:id" element={<VanDetail />} />

                <Route path="host" element={<HostLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="income" element={<Income />} />
                    <Route path="vans" element={<HostVans />} />
                    <Route path="vans/:id" element={<HostVanDetail />}>
                        <Route index element={<HostVanInfo />} />
                        <Route path="pricing" element={<HostVanPricing />} />
                        <Route path="photos" element={<HostVanPhotos />} />
                    </Route>
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
