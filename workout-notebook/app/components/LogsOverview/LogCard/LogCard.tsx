import React from 'react';
import { CardContent, Typography, List, ListItem, Card, CardActionArea } from '@mui/material';
import styles from './LogCard.module.css';
import { Log } from '@/app/types/exercises';
import { dateDisplay, getNameOfDay } from '@/lib/dateHelpers';

interface LogCardProps {
    log: Log;
}

const LogCard: React.FC<LogCardProps> = ({ log }) => {
    const { date, exercises } = log;

    return (
        <Card className={styles.logCard}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {getNameOfDay(date)}, {dateDisplay(date)}
                    </Typography>
                    <List className={styles.exerciseList}>
                        {exercises.map((exercise) => (
                            <ListItem key={exercise.id} className={styles.exerciseItem}>
                                {exercise.name}
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default LogCard;
