import React from 'react'
import { Box, Typography, IconButton, ButtonBase } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function ShoppingListItem({ item, onRemove, toddlerMode }) {
  if (toddlerMode) {
    return (
      <ButtonBase
        onClick={() => onRemove(item.id)}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          py: 1.5,
          px: 1.5,
          mb: 1,
          borderRadius: '12px',
          bgcolor: 'rgba(91,140,90,0.06)',
          border: '1.5px solid',
          borderColor: 'rgba(91,140,90,0.15)',
          gap: 1.5,
          textAlign: 'left',
          '&:active': { bgcolor: 'rgba(244,132,95,0.12)', borderColor: '#F4845F' },
        }}
      >
        <Typography sx={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: '1rem', flex: 1 }}>{item.name}</Typography>
        <Typography sx={{ fontWeight: 900, fontSize: '1.4rem', color: 'primary.main', flexShrink: 0 }}>
          {item.quantity}
        </Typography>
      </ButtonBase>
    )
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      py: 1.5,
      px: 1.5,
      mb: 1,
      borderRadius: '12px',
      bgcolor: 'rgba(91,140,90,0.06)',
      border: '1.5px solid',
      borderColor: 'rgba(91,140,90,0.15)',
      gap: 1.5,
    }}>
      <Typography sx={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</Typography>
      <Typography sx={{ fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>{item.name}</Typography>
      <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.secondary', flex: 1, whiteSpace: 'nowrap' }}>
        {item.quantity}&thinsp;×&thinsp;{item.preis}&thinsp;€&thinsp;=&thinsp;
        <Box component="span" sx={{ color: 'primary.main', fontWeight: 900 }}>
          {item.quantity * item.preis}&thinsp;€
        </Box>
      </Typography>
      <IconButton
        size="medium"
        onClick={() => onRemove(item.id)}
        sx={{ color: '#F4845F', flexShrink: 0, '&:hover': { bgcolor: 'rgba(244,132,95,0.1)' } }}
      >
        <DeleteIcon sx={{ fontSize: 22 }} />
      </IconButton>
    </Box>
  )
}
