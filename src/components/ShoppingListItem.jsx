import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function ShoppingListItem({ item, onRemove }) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      py: 1,
      px: 1,
      mb: 0.5,
      borderRadius: '10px',
      bgcolor: 'rgba(91,140,90,0.06)',
      border: '1.5px solid',
      borderColor: 'rgba(91,140,90,0.15)',
    }}>
      <Typography sx={{ fontSize: '1.4rem', mr: 1, lineHeight: 1 }}>{item.emoji}</Typography>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.2 }}>
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 600 }}>
          {item.quantity} × {item.preis} € = <strong>{item.quantity * item.preis} €</strong>
        </Typography>
      </Box>
      <IconButton
        size="small"
        onClick={() => onRemove(item.id)}
        sx={{ color: '#F4845F', ml: 0.5, '&:hover': { bgcolor: 'rgba(244,132,95,0.1)' } }}
      >
        <DeleteIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Box>
  )
}
