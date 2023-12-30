
import { Log, unitOfMeasurement } from '../types/exercises';
import { v4 as uuidv4 } from 'uuid';

// Mock Data
const mockLogs: Log[] = [
    {
        id: uuidv4(),
        name: 'Workout Log 1',
        date: new Date('2023-01-15T18:30:00'),
        exercises: [
            {
                id: uuidv4(),
                name: 'Bench Press',
                sets: [
                    { repetitions: 10, weight: 80 },
                    { repetitions: 8, weight: 85 },
                ],
            },
            {
                id: uuidv4(),
                name: 'Deadlift',
                sets: [
                    { repetitions: 5, weight: 120 },
                    { repetitions: 5, weight: 130 },
                ],
            },
        ],
        unitOfMeasurement: unitOfMeasurement.KG,
    },
    {
        id: uuidv4(),
        name: 'Workout Log 2',
        date: new Date('2023-01-17T17:45:00'),
        exercises: [
            {
                id: uuidv4(),
                name: 'Squat',
                sets: [
                    { repetitions: 8, weight: 100 },
                    { repetitions: 8, weight: 110 },
                ],
            },
            {
                id: uuidv4(),
                name: 'Overhead Press',
                sets: [
                    { repetitions: 6, weight: 50 },
                    { repetitions: 6, weight: 55 },
                ],
            },
        ],
        unitOfMeasurement: unitOfMeasurement.KG,
    },
    {
        id: uuidv4(),
        name: 'Workout Log 3',
        date: new Date('2023-01-20T19:15:00'),
        exercises: [
            {
                id: uuidv4(),
                name: 'Pull-up',
                sets: [
                    { repetitions: 12, weight: 0 }, // Bodyweight
                    { repetitions: 10, weight: 0 },
                    { repetitions: 8, weight: 0 },
                ],
            },
            {
                id: uuidv4(),
                name: 'Lunges',
                sets: [
                    { repetitions: 12, weight: 30 },
                    { repetitions: 10, weight: 35 },
                ],
            },
        ],
        unitOfMeasurement: unitOfMeasurement.KG,
    },
    {
        id: uuidv4(),
        name: 'Workout Log 4',
        date: new Date('2023-01-22T16:00:00'),
        exercises: [
            {
                id: uuidv4(),
                name: 'Chest Fly',
                sets: [
                    { repetitions: 12, weight: 20 },
                    { repetitions: 10, weight: 25 },
                ],
            },
            {
                id: uuidv4(),
                name: 'Bicep Curl',
                sets: [
                    { repetitions: 12, weight: 15 },
                    { repetitions: 10, weight: 20 },
                ],
            },
        ],
        unitOfMeasurement: unitOfMeasurement.LB,
    },
];

export default mockLogs;
