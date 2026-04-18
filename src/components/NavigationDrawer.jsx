import React from 'react'
import {
  Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Divider, Typography, Box
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import InfoIcon from '@mui/icons-material/Info'

export default function NavigationDrawer({ open, onClose, onOpenSettings, onOpenAbout }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: 280 } }}>
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" sx={{ fontWeight: 900 }}>Menü</Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={onOpenSettings} sx={{ py: 2 }}>
            <ListItemIcon><SettingsIcon color="primary" sx={{ fontSize: 28 }} /></ListItemIcon>
            <ListItemText primary="Einstellungen" primaryTypographyProps={{ fontWeight: 700, fontSize: '1.1rem' }} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={onOpenAbout} sx={{ py: 2 }}>
            <ListItemIcon><InfoIcon color="primary" sx={{ fontSize: 28 }} /></ListItemIcon>
            <ListItemText primary="Über die App" primaryTypographyProps={{ fontWeight: 700, fontSize: '1.1rem' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}
