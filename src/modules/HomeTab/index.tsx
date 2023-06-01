import React from 'react';
import { BottomTab } from '@components/BottomTab';
import { Home } from './Home';
import { Appointments } from './Appointments';

export function HomeTab() {
    return (
        <BottomTab
            tabArr={[
                {
                    route: "Home",
                    label: "Home",
                    icon: 'home',
                    component: Home,
                },
                {
                    route: "Appointemnts",
                    label: "Appointemnts",
                    icon: 'calendar',
                    component: Appointments,
                }
            ]}
        />
    );
};
