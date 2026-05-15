import React from 'react'
import { Box, Typography, ButtonBase } from '@mui/material'

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

  const calculation = (
    <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: 'text.secondary', textAlign: 'center' }}>
      {item.quantity}&thinsp;×&thinsp;{item.preis}&thinsp;€&thinsp;=&thinsp;
      <Box component="span" sx={{ color: 'primary.main', fontWeight: 900 }}>
        {item.quantity * item.preis}&thinsp;€
      </Box>
    </Typography>
  )

  return (
    <ButtonBase
      onClick={() => onRemove(item.id)}
      sx={{
        width: '100%',
        display: 'block',
        textAlign: 'left',
        py: 1.5,
        px: 1.5,
        mb: 1,
        borderRadius: '12px',
        bgcolor: 'rgba(91,140,90,0.06)',
        border: '1.5px solid',
        borderColor: 'rgba(91,140,90,0.15)',
        '&:active': { bgcolor: 'rgba(244,132,95,0.12)', borderColor: '#F4845F' },
      }}
    >
      {/* Desktop: single row */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1.5 }}>
        <Typography sx={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: '1rem', flex: 1 }}>{item.name}</Typography>
        {calculation}
      </Box>
      {/* Portrait: three rows */}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', alignItems: 'center', gap: 0.25 }}>
        <Typography sx={{ fontSize: '2rem', lineHeight: 1 }}>{item.emoji}</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', textAlign: 'center' }}>{item.name}</Typography>
        {calculation}
      </Box>
    </ButtonBase>
  )
}
