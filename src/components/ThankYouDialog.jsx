import React from 'react'
import { Dialog, DialogContent, Typography, Box } from '@mui/material'

export default function ThankYouDialog({ open }) {
  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          textAlign: 'center',
          py: 4,
          background: 'linear-gradient(135deg, #5B8C5A 0%, #7ab878 100%)',
          color: '#fff',
        },
      }}
    >
      <DialogContent>
        <Typography sx={{ fontSize: '5rem', lineHeight: 1, mb: 2 }}>🎉</Typography>
        <Typography variant="h4" sx={{ fontWeight: 900, color: '#fff', mb: 1 }}>
          Danke für den Kauf!
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', opacity: 0.9, color: '#fff' }}>
          Auf Wiedersehen! 👋
        </Typography>
      </DialogContent>
    </Dialog>
  )
}
