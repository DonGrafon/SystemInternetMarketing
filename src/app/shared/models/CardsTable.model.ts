export class CardsTable {
    constructor(
        public id: number, 
        public instrument: string, 
        public costInMonth: number, 
        public action: string, 
        public specialSituations: string,
        public additionalEffects: string
        ) {}
}