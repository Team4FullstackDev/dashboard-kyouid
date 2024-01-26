import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Discount from './pages/Discount';
import Order from './pages/Order';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AddProducts from './pages/AddProducts';
import Health from './pages/health';

const App = () => {
	return (
		<>
			<RootLayout>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/users" element={<Users />} />
					<Route path="/add-products" element={<AddProducts />} />
					<Route path="/products" element={<Products />} />
					<Route path="/discount" element={<Discount />} />
					<Route path="/order" element={<Order />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/health" element={<Health />} />
				</Routes>
			</RootLayout>
		</>
	);
};

export default App;
