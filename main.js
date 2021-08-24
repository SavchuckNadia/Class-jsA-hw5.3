class CoffeeMake {
    constructor(isOn) {
        this.isOn = isOn;
    }
    on() {
        console.log('Coffee maker is on');
        this.isOn = true;
    }
    off() {
        console.log('Coffee maker is off');
        this.isOn = false;
    }
}
class DripCoffeeMaker extends CoffeeMake {
    constructor(isOn, coffeeFilter, keepWarmPlate, carafe, waterFilter, waterLevelIndicator, descalingAlarm, color, inputPower, autoShutOff) {
        super(isOn);
        this.coffeeFilter = coffeeFilter;
        this.keepWarmPlate = keepWarmPlate;
        this.carafe = carafe;
        this.waterFilter = waterFilter;
        this.waterLevelIndicator = waterLevelIndicator;
        this.descalingAlarm = descalingAlarm;
        this.color = color;
        this.inputPower = inputPower
        this.autoShutOff = autoShutOff
    }
    overIceBrewingFunction() {
        console.log('Our SCA certified machine delivers bold, rich taste that is never watered down, even over ice.');
    }
    pourOverBrewingFunction() {
        console.log('A specifically designed shower head and automatic waterflow control, ensures an evenly saturated coffee powder for a more intense and aromatic flavour, at the touch of a button.');
    }

    antiDripSystem() {
        console.log('This coffee maker has an automatic anti-drip system, Carafe Sensor (C), that stops brewing when the glass carafe has been removed from the warming plate. To continue the brewing cycle place the carafe back onto the warming plate.');
    }
    warmingPlate() {
        console.log('Once the brewing cycle has finished, the warming plate will stay on for one hour in order to keep the coffee at the ideal temperature.');
    }
}

class PumpEspressoCoffeeMachine extends CoffeeMake {
    constructor(isOn, automaticCappucchino, latteMacchiato, inputPower, hotMilk, milkSystem, milkJug, heatingSystem, removableDripTray, removableWaterReservoir, waterLevelIndicator, bodyMaterial, numberOfFilter, colour, ) {
        super(isOn);
        this.automaticCappucchino = automaticCappucchino;
        this.latteMacchiato = latteMacchiato;
        this.inputPower = inputPower;
        this.hotMilk = hotMilk;
        this.milkSystem = milkSystem;
        this.milkJug = milkJug;
        this.heatingSystem = heatingSystem;
        this.removableDripTray = removableDripTray;
        this.removableWaterReservoir = removableWaterReservoir;
        this.waterLevelIndicator = waterLevelIndicator;
        this.bodyMaterial = bodyMaterial;
        this.numberOfFilter = numberOfFilter;
        this.colour = colour;
    }
    the15BarPressure() {
        console.log('The 15 bar pressure creates an Espresso with a rich aroma and a nut coloured cream on top ');
    }
    automaticCappucchinoSystem() {
        console.log('With the Automatic Cappuccino System you can easily froth milk for a perfect Cappucchino with the carafe or steam milk up for a great Caffelatte');
    }
    dualThermoblockTecnology() {
        console.log('The unique Dual Thermoblock tecnology heats milk and water separately for a perfect Cappucchino, served between 65 and 70 degrees ');
    }
    doubleDripTray() {
        console.log('The removable drip tray allows you to use mugs and glasses up to 12 cm tall');
    }
}

class automaticEspressoMachine extends CoffeeMake {
    constructor(isOn, inputPower, color, aromafunction, cupHolder, programmableWaterHardness, display) {
        super(isOn)
        this.inputPower = inputPower;
        this.color = color;
        this.aromafunction = aromafunction;
        this.cupHolder = cupHolder;
        this.programmableWaterHardness = programmableWaterHardness;
        this.display = display
    }
    autoStart() {
        console.log('You can set the auto-start time in order to have the appliance ready at a certain time (for example in the morning) so you can make coffee immediately.');
    }
    settingWaterHardness() {
        console.log('The machine is set by default for a hardness value of 4. The ma- chine can also be programmed according to the hardness of the mains water in the various regions so that the machine needs to be descaled less often.');
    }
    milkMenu() {
        console.log('Get access to additional milk based beverages through the Milk Menu function. The machine automatically makes steamed milk, flat white , espresso macchiato and even a "My Milk" option for your custom creations');
    }
}
