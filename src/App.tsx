import { ConfigProvider, theme } from "antd"
import { MainMenu } from "./components"
import type { MenuProps } from 'antd';
import { Link } from "react-router-dom";
import { menuItems } from "./constants";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = menuItems.map((item) => {
	if (item.children) {
		return {
			...item,
			children: item.children.map((child) => ({
				...child,
				label: child.to ? <Link to={child.to}>{child.label}</Link> : child.label
			})),
		};
	}
	return {
		...item,
		label:<Link to={item.to}>{item.label}</Link>
	};
});

function App() {
	return (
		<ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
			<MainMenu menuItems={items} />				
		</ConfigProvider>
	)
}

export default App
