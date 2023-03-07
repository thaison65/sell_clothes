import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Found404 from "~/pages/Foud404";


const publicRoutes = [
    { path: '/', component: Home, },
    { path: '/product', component: Product, layout: 'onlylayout' },
    { path: '/found404', component: Found404, layout: 'onlylayout' },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};