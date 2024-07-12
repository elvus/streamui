import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/error'
import './index.css'
import { menuItems } from './constants.tsx'
import { BlankPage } from './pages/blankPage/index.tsx'

const getChildRoutes = (item: any) => {
	if (item.children) {
		return (<Route key={item.key} path={item.to}>
			{item.children.map((child: any) => (
				getChildRoutes(child)
			))}
		</Route>)
	}
	return <Route key={item.key} path={item.to} element={item.component ? item.component : <BlankPage />} />
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />} errorElement={<ErrorPage />}>
			{menuItems.map((item) => {
				return getChildRoutes(item)
			})}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
