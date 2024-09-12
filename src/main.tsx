import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/error'
import './index.css'
import { menuItems } from './constants.tsx'
import { BlankPage } from './pages/blankPage/index.tsx'
import LoginForm from './pages/login/index.tsx'

const getChildRoutes = (item: any) => {
	if (item.children) {
		return (<Route key={item.key}>
			<Route path={item.to} element={item.component ? item.component : <BlankPage />} />
			{item.children.map((child: any) => (
				getChildRoutes(child)
			))}
		</Route>)
	}
	return <Route key={item.key} path={item.to} element={item.component ? item.component : <BlankPage />} />
}

const router = (
	<Router>
		<Routes>
			<Route path="/login" element={<LoginForm />} />
			<Route path="/" element={<App />} errorElement={<ErrorPage />}>
				{menuItems.map((item) => {
					return getChildRoutes(item)
				})}
			</Route>
		</Routes>
	</Router>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{router}
	</React.StrictMode>,
)
