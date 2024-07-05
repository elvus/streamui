import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/error'
import './index.css'
import { menuItems } from './constants.tsx'


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />} errorElement={<ErrorPage />}>
			{menuItems.map((item) => {
				if (item.children) {
					return (
						<Route key={item.key} path={item.to} element={item.component}>
							{item.children.map((child) => (
								<Route key={child.key} path={child.to} element={child.component} />
							))}
						</Route>
					);
				}
				return <Route key={item.key} path={item.to} element={item.component} />;
			})}
		</Route>
	)
);

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<App />} errorElement={<ErrorPage />}>
// 			<Route index element={<Home />} />
// 			<Route path="/schools" element={<SchoolsList />} />
// 			<Route path="/students" element={<StudentsList />} />
// 			<Route path="/teachers" element={<TeachersList />} />
// 			<Route errorElement={<ErrorPage />}>
// 				<Route path="/option/:id" element={<div>AAA</div>} />
// 			</Route>
// 		</Route>
// 	)
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
