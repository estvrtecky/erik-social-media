"use client";

import * as React from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home as HomeIcon, AccountCircle as AccountCircleIcon, AddCircle as AddCircleIcon, Login as LoginIcon, AppRegistration as AppRegistrationIcon } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  
  const pathname = usePathname();  // Access the current path

  // Map of paths to BottomNavigation index values
  const paths = ['/', '/profil', '/prispevok', '/auth/prihlasenie', '/auth/registracia'];

  // Update the active tab based on the current path
  React.useEffect(() => {
    const currentPathIndex = paths.indexOf(pathname);
    if (currentPathIndex !== -1) {
      setValue(currentPathIndex);
    }
  }, [pathname]); // Re-run when the pathname changes

  return (
    <Paper 
      component="div" // Specify the component type
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
      elevation={3} // Add elevation for shadow effect
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue); // Update the active state
        }}
        showLabels={false}
        sx={{ alignItems: 'center' }} // Center the icons vertically
      >
        {/* Home Link */}
        <Link href="/" passHref>
          <BottomNavigationAction
            icon={<HomeIcon />}
            sx={{ color: value === 0 ? 'primary.main' : 'text.secondary' }} // Highlight active
          />
        </Link>

        {/* Profile Link */}
        <Link href="/profil" passHref>
          <BottomNavigationAction
            icon={<AccountCircleIcon />}
            sx={{ color: value === 1 ? 'primary.main' : 'text.secondary' }} // Highlight active
          />
        </Link>

        {/* Add Post Link */}
        <Link href="/prispevok" passHref>
          <BottomNavigationAction
            icon={<AddCircleIcon />}
            sx={{ color: value === 2 ? 'primary.main' : 'text.secondary' }} // Highlight active
          />
        </Link>

        {/* Log In Link */}
        <Link href="/auth/prihlasenie" passHref>
          <BottomNavigationAction
            icon={<LoginIcon />}
            sx={{ color: value === 3 ? 'primary.main' : 'text.secondary' }} // Highlight active
          />
        </Link>

        {/* Sign Up Link */}
        <Link href="/auth/registracia" passHref>
          <BottomNavigationAction
            icon={<AppRegistrationIcon />}
            sx={{ color: value === 4 ? 'primary.main' : 'text.secondary' }} // Highlight active
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
