import React from 'react';
import { Typography } from '@mui/material';
import { Log, unitOfMeasurement } from '@/app/types/exercises';
import LogCard from './LogCard/LogCard';
import mockLogs from '@/app/mocks/mockLogs';

const LogsOverview: React.FC = () => {
    return (
        <div>
            <Typography variant="h6">Logs</Typography>
            {mockLogs.map((log: Log) => (
                <LogCard key={log.id} log={log} />
            ))}
        </div>
    );
};

export default LogsOverview;
