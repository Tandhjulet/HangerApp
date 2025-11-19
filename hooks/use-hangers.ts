import { useState } from "react";

export interface Hanger {
	number: number;
	club: string;
}

export function useHangers() {
	const [hangers, setHangers] = useState<Hanger[]>([
		{
			club: "Zwei Grosse",
			number: 271,
		},
		{
			club: "Heidi's Bier Bar",
			number: 88,
		},
	]);

	return hangers;
}
