import Constants from 'expo-constants';
import { Image } from "expo-image";
import { Tabs } from "expo-router";

const LogoTitle = (
	<Image
		source={require('@/assets/images/hanger.png')}
		style={{ width: 120, height: 120, alignSelf: 'center' }}
		cachePolicy={'memory'}
	/>
);

export default function TabLayout() {

	return (
		<Tabs screenOptions={{
			headerStyle: {
				height: Constants.statusBarHeight + 100,
			},
			headerTitle: _ => LogoTitle,
		}}>
			<Tabs.Screen name="settings" options={{ title: "Indstillinger" }} />
			<Tabs.Screen name="index" options={{ title: "Scan" }} />
			<Tabs.Screen name="wardrobe" options={{ title: "Garderobe" }} />
		</Tabs>
	);
}
