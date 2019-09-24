namespace Scripts {
	export class Executable {
		static UseBandage() {
			var banda = Orion.FindType('0x0E21', '0x0000');
			if(banda.length) {
				Orion.UseObject(banda[0]);
			}
		}

		static MovePotions() {
			const cleaner = new Utility();
			cleaner.MovePotions();
		}
	}
}