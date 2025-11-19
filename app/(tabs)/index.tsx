import { Colors } from "@/constants/theme";
import { useHangers } from "@/hooks/use-hangers";
import { Text, View } from "react-native";

export default function Index() {
	const hangers = useHangers();

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				paddingHorizontal: 30,
				paddingVertical: 40,
			}}
		>
			<Text
				style={{
					fontSize: 35,
					fontWeight: 600,
				}}
			>
				Dine bøjler
			</Text>
			<Text
				style={{
					fontSize: 22.5,
					color: Colors.tint,
				}}
			>
				Du har 0 bøjler i brug
			</Text>

			<View style={{
				display: "flex",
				flexDirection: "column",
				gap: 10,
				marginTop: 30,
			}}>
				{hangers?.map((hanger, i) => {
					return (
						<View key={i} style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 12.5,
							borderRadius: 999,
							overflow: "hidden",

							width: "100%",
							backgroundColor: Colors.background,
						}}>
							<View style={{
								backgroundColor: Colors.tint,
								paddingVertical: 12.5,
								width: 60,
							}}>
								<Text style={{
									alignSelf: 'center',
									fontWeight: 700,
									color: Colors.background,
								}}>
									#{hanger.number}
								</Text>
							</View>
							<Text style={{
								color: Colors.tint,
							}}>
								{hanger.club}
							</Text>
						</View>
					)
				})}
			</View>
		</View>
	);
}
