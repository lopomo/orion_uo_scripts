namespace Scripts {
	export class Utility {
		private moveDelay = 500;
		private potionDefinitions = [
			{ Name: 'Total Mana Refresh', Graphic: '0x0F09', Color: '0x0003' },
			{ Name: 'Mana Refresh', Graphic: '0x0F09', Color: '0x0005' },
			{ Name: 'Blood', Graphic: '0x0F0C', Color: '0x0025' },
			{ Name: 'Heal', Graphic: '0x0F0C', Color: '0x0000' },
			{ Name: 'Strength', Graphic: '0x0F09', Color: '0x0000' },
			{ Name: 'Cure', Graphic: '0x0F07', Color: '0x0000' },
			{ Name: 'Refresh', Graphic: '0x0F0B', Color: '0x0000' }
		];

		public MovePotions() {
			let startY = 10;
			for (const potionDef of this.potionDefinitions) {
				let startX = 20;
				const typePotions = Orion.FindType(potionDef.Graphic, potionDef.Color);
				if (typePotions.length > 0) {
					for (const typePotion of typePotions) {
						Orion.MoveItem(typePotion, 0, 'backpack', startX, startY);
						Orion.Wait(this.moveDelay);
						startX += 5;
					}
					startY += 15;
				}
			}
		}
	}
}