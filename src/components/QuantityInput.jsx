import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export default function QuantityInput({ value, onChange }) {
  const decrement = () => onChange(Math.max(1, value - 1))
  const increment = () => onChange(value + 1)

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      border: '2px solid',
      borderColor: 'primary.main',
      borderRadius: '12px',
      overflow: 'hidden',
    }}>
      <IconButton
        onClick={decrement}
        disabled={value <= 1}
        size="large"
        sx={{ borderRadius: 0, px: 1.5, py: 1 }}
      >
        <RemoveIcon sx={{ fontSize: 22 }} />
      </IconButton>
      <Typography sx={{
        fontWeight: 900,
        fontSize: '1.4rem',
        minWidth: 40,
        textAlign: 'center',
        px: 1,
      }}>
        {value}
      </Typography>
      <IconButton
        onClick={increment}
        size="large"
        sx={{ borderRadius: 0, px: 1.5, py: 1 }}
      >
        <AddIcon sx={{ fontSize: 22 }} />
      </IconButton>
    </Box>
  )
}
