import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import StorefrontIcon from '@mui/icons-material/Storefront'

export default function AppBarComponent({ onMenuOpen }) {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <StorefrontIcon sx={{ fontSize: 32, mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" sx={{ fontWeight: 900, color: 'text.primary', flex: 1 }}>
          Einkaufsladen
        </Typography>
        <IconButton onClick={onMenuOpen} size="large" sx={{ color: 'text.primary' }}>
          <SettingsIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
