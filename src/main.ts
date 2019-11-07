namespace Scripts {
	export class Executable {
		// Static scoped
		// Hotkey usage: Scripts.Executable.PrintTest();
		static PrintTest() {
			new Utility().test();
		}
	}
}

// OR public function
// Hotkey usage: PrintTest();
function PrintTest() {
	new Scripts.Utility().test();
}