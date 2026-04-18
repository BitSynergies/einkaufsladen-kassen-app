import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import ShoppingListItem from './ShoppingListItem'
import PayButton from './PayButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function ShoppingList({ cart, total, onRemove, onPay, toddlerMode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ p: 1.5, borderBottom: '2px solid', borderColor: 'rgba(91,140,90,0.2)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ShoppingCartIcon sx={{ color: 'primary.main', fontSize: 24 }} />
          <Typography sx={{ fontWeight: 900, fontSize: '1.1rem' }}>Einkaufsliste</Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, overflowY: 'auto', px: 1.5, py: 1 }}>
        {cart.length === 0 ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', textAlign: 'center', opacity: 0.6 }}>
              Noch nichts im Korb 🛒
            </Typography>
          </Box>
        ) : (
          cart.map(item => (
            <ShoppingListItem key={item.id} item={item} onRemove={onRemove} toddlerMode={toddlerMode} />
          ))
        )}
      </Box>
      <Box sx={{ p: 1.5, borderTop: '2px solid', borderColor: 'rgba(91,140,90,0.2)' }}>
        <Divider sx={{ mb: 1.5 }} />
        {!toddlerMode && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography sx={{ fontWeight: 900, fontSize: '1.1rem' }}>Gesamt:</Typography>
            <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'primary.main' }}>
              {total} €
            </Typography>
          </Box>
        )}
        <PayButton onClick={onPay} disabled={cart.length === 0} />
      </Box>
    </Box>
  )
}
