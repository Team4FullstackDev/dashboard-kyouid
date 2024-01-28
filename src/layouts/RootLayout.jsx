import NavBar from './navbar';
import Sidebar from './sidebar';

function RootLayout({ children }) {
	return (
		<div className="flex ">
			<Sidebar />
			<div className="flex flex-col  w-full">
				<NavBar />
				<main className="container mx-auto px-5 py-4">{children}</main>
			</div>
		</div>
	);
}

export default RootLayout;
