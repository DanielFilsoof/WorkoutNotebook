type set = {
    repetitions: number;
    weight: number;
}

type exercise = {
    id: any;
    name: string;
    date: Date;
    sets: set[];
    unitOfMeasurement: string;
}

export type { set, exercise };
