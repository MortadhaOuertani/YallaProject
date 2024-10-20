import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

function AllerRetourCheckbox({ name, date }) {
    const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const [checkedDays, setCheckedDays] = useState([]);
    const [checkAll, setCheckAll] = useState(false);

    const handleDayChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedDays([...checkedDays, value]);
        } else {
            setCheckedDays(checkedDays.filter(day => day !== value));
        }
    };

    const handleCheckAllChange = (event) => {
        const { checked } = event.target;
        setCheckAll(checked);
        if (checked) {
            setCheckedDays(daysOfWeek);
        } else {
            setCheckedDays([]);
        }
    };

    useEffect(() => {
        // Sync the checkAll state with the checkedDays
        setCheckAll(checkedDays.length === daysOfWeek.length);
    }, [checkedDays]);

    return (
        <div>
            <label className="font-semibold text-[13px] mb-5 ml-3 text-gray-500">{name}</label>
                <>
                    <div className="flex flex-wrap items-center">
                        {daysOfWeek.map((day) => (
                            <div key={day} className="flex items-center mr-4 mb-2">
                                <Checkbox
                                    value={day}
                                    checked={checkedDays.includes(day)}
                                    onChange={handleDayChange}
                                    sx={{
                                        color: '#d8d8d8',
                                        '&.Mui-checked': {
                                            color: '#fbbf24',
                                        },
                                    }}
                                />
                                <label className="font-semibold text-[12px] ml-1 text-gray-500">{day}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <Checkbox
                            checked={checkAll}
                            onChange={handleCheckAllChange}
                            sx={{
                                color: '#d8d8d8',
                                '&.Mui-checked': {
                                    color: '#fbbf24',
                                },
                            }}
                        />
                        <label className="font-semibold text-[13px] mb-3 text-gray-500">Tous les jours</label>
                    </div>
                </>
          
        </div>
    );
}

export default AllerRetourCheckbox;
