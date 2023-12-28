import { dateDisplay } from '@/lib/dateHelpers';
import { TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { forwardRef } from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from './styles.module.css'

export const Datepicker = () => {
    const [date, setDate] = useState<Date | null>(new Date('2022-04-17'));
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.datepickerContainer}>
            <input
                type="date"
                value={date?.toISOString().slice(0, 10)}
                onChange={(e) => setDate(new Date(e.target.value))}
                className={styles.datepicker}
            />
        </div>
    );
}
