import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen name="settings" options={{ title: "Indstillinger" }} />
			<Tabs.Screen name="index" options={{ title: "Scan" }} />
			<Tabs.Screen name="wardrobe" options={{ title: "Garderobe" }} />
		</Tabs>
	);
}
