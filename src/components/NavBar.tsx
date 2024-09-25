// src/components/NavBar.tsx

"use client";

import * as React from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home as HomeIcon, Search as SearchIcon, AddBox as AddBoxIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper 
      component="div" // Specify the component type
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
      elevation={3} // Add elevation for shadow effect
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels={false}
        sx={{ alignItems: 'center' }} // Center the icons vertically
      >
        {/* Home Link */}
        <Link href="/" passHref>
          <BottomNavigationAction icon={<HomeIcon />} />
        </Link>

        {/* Search Link */}
        <Link href="/hladanie" passHref>
          <BottomNavigationAction icon={<SearchIcon />} />
        </Link>

        {/* Add Post Link */}
        <Link href="/pridat" passHref>
          <BottomNavigationAction icon={<AddBoxIcon />} />
        </Link>

        {/* Notifications Link */}
        <Link href="/notifikacie" passHref>
          <BottomNavigationAction icon={<NotificationsIcon />} />
        </Link>

        {/* Profile Link */}
        <Link href="/profil" passHref>
          <BottomNavigationAction icon={<AccountCircleIcon />} />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
