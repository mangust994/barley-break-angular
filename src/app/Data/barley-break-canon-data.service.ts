

class ButtonNumber { 
    name: string;
    coordX: number;
    coordY: number;
    constructor(name: string, coordX: number, coordY: number) {
        this.name = name;
        this.coordX = coordX;
        this.coordY = coordY;
    }
}

export class BarleyBreakCanonDataService{
    numSteps = 0;
    buttons: ButtonNumber[] = 
    [
        {name: '1', coordX: 1, coordY: 1},
        {name: '2', coordX: 1, coordY: 2},
        {name: '3', coordX: 1, coordY: 3},
        {name: '4', coordX: 1, coordY: 4},
        {name: '5', coordX: 2, coordY: 1},
        {name: '6', coordX: 2, coordY: 2},
        {name: '7', coordX: 2, coordY: 3},
        {name: '8', coordX: 2, coordY: 4},
        {name: '9', coordX: 3, coordY: 1},
        {name: '10', coordX: 3, coordY: 2},
        {name: '11', coordX: 3, coordY: 3},
        {name: '12', coordX: 3, coordY: 4},
        {name: '13', coordX: 4, coordY: 1},
        {name: '14', coordX: 4, coordY: 2},
        {name: '15', coordX: 4, coordY: 3},
        {name: ' ', coordX: 4, coordY: 4}
    ];
}