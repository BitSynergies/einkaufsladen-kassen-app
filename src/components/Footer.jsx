import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 0.75,
        px: 2,
        borderTop: '1px solid',
        borderColor: 'rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 600 }}>
        Mit Liebe erstellt für unsere Kinder von{' '}
        <Box
          component="a"
          href="https://bitsynergies.de"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0192ED', textDecoration: 'none', fontWeight: 800 }}
        >
          BitSynergies
        </Box>
      </Typography>
    </Box>
  )
}
