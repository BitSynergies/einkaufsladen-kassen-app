import React from 'react'
import { Box, ButtonBase, Typography } from '@mui/material'

export default function ProductButton({ product, selected, onClick }) {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        width: '100%',
        aspectRatio: '1',
        borderRadius: '12px',
        border: '3px solid',
        borderColor: selected ? 'primary.main' : 'rgba(91,140,90,0.25)',
        bgcolor: selected ? 'rgba(91,140,90,0.12)' : 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
        transition: 'all 0.15s ease',
        boxShadow: selected ? '0 0 0 3px rgba(91,140,90,0.3)' : '0 2px 6px rgba(0,0,0,0.06)',
        transform: selected ? 'scale(0.97)' : 'scale(1)',
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: 'rgba(91,140,90,0.08)',
          boxShadow: '0 4px 12px rgba(91,140,90,0.2)',
        },
        '&:active': { transform: 'scale(0.94)' },
      }}
    >
      <Typography sx={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
        {product.emoji}
      </Typography>
      <Typography sx={{
        fontWeight: 800,
        fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
        color: 'text.primary',
        textAlign: 'center',
        lineHeight: 1.2,
        px: 0.5,
      }}>
        {product.name}
      </Typography>
    </ButtonBase>
  )
}
