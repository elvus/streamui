import { ConfigProvider, theme } from "antd"
import { MainMenu } from "./components"
import type { MenuProps } from 'antd';
import { Link } from "react-router-dom";
import { menuItems } from "./constants";

type MenuItem = Required<MenuProps>['items'][number];

const getMenuChildren = (item: any) => {
	if (item.children) {
		return{
			...item,
			children: item.children.map((child: any) => {
				return getMenuChildren(child);
			})
		};
	}
	return {
		...item,
		label: item.to ? <Link to={item.to}>{item.label}</Link> : item.label
	};

}

const items: MenuItem[] = menuItems.map((item) => {
	return getMenuChildren(item);
});

function App() {
	return (
		<ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
			<MainMenu menuItems={items} />				
		</ConfigProvider>
	)
}

export default App
