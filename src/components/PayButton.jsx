import React from 'react'
import { Button } from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment'

export default function PayButton({ onClick, disabled }) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      disabled={disabled}
      onClick={onClick}
      startIcon={<PaymentIcon sx={{ fontSize: 26 }} />}
      sx={{
        py: 2,
        fontSize: '1.2rem',
        fontWeight: 900,
        borderRadius: '12px',
        boxShadow: disabled ? 'none' : '0 4px 16px rgba(91,140,90,0.4)',
        transition: 'all 0.15s ease',
        '&:not(:disabled):hover': {
          boxShadow: '0 6px 20px rgba(91,140,90,0.5)',
          transform: 'translateY(-1px)',
        },
        '&:not(:disabled):active': {
          transform: 'translateY(0)',
        },
      }}
    >
      Bezahlen
    </Button>
  )
}
