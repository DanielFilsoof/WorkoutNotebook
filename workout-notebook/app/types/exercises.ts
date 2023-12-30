type Set = {
    repetitions: number;
    weight: number;
}

type Exercise = {
    id: any;
    name: string;
    sets: Set[];
}

type Log = {
    id: any;
    name: string;
    date: Date;
    exercises: Exercise[];
    unitOfMeasurement: unitOfMeasurement
}

enum unitOfMeasurement {
    KG = 'KG',
    LB = 'LB',
}

export type { Set, Exercise, Log };
export { unitOfMeasurement };
