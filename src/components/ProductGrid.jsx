import React from 'react'
import { Box, Grid, Paper, Button, Typography } from '@mui/material'
import ProductButton from './ProductButton'
import QuantityInput from './QuantityInput'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

export default function ProductGrid({ products, selectedProduct, quantity, onSelectProduct, onQuantityChange, onAddToCart, toddlerMode }) {
  const categories = [...new Set(products.map(p => p.kategorie).filter(Boolean))]
  const uncategorized = products.filter(p => !p.kategorie)

  const sections = [
    ...categories.map(cat => ({ label: cat, items: products.filter(p => p.kategorie === cat).sort((a, b) => a.name.localeCompare(b.name, 'de')) })),
    ...(uncategorized.length ? [{ label: null, items: uncategorized.sort((a, b) => a.name.localeCompare(b.name, 'de')) }] : []),
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', p: 1.5 }}>
        {sections.map(({ label, items }) => (
          <Box key={label ?? '__none'} sx={{ mb: 2 }}>
            {label && (
              <Typography sx={{
                fontWeight: 900,
                fontSize: '1rem',
                color: 'primary.main',
                mb: 1,
                px: 0.5,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {label}
              </Typography>
            )}
            <Grid container spacing={1.5}>
              {items.map(product => (
                <Grid item xs={6} sm={4} key={product.id}>
                  <ProductButton
                    product={product}
                    selected={!toddlerMode && selectedProduct?.id === product.id}
                    onClick={() => onSelectProduct(product)}
                    hidePrice={toddlerMode}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
      {selectedProduct && !toddlerMode && (
        <Paper
          elevation={4}
          sx={{
            p: 2,
            mx: 1.5,
            mb: 1.5,
            borderRadius: 3,
            border: '2px solid',
            borderColor: 'primary.main',
            bgcolor: 'background.paper',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={{ fontSize: '1.8rem' }}>{selectedProduct.emoji}</Typography>
          <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', flex: 1 }}>
            {selectedProduct.name}
          </Typography>
          <QuantityInput value={quantity} onChange={onQuantityChange} />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<AddShoppingCartIcon />}
            onClick={onAddToCart}
            sx={{ fontWeight: 900, fontSize: '1rem', px: 3, py: 1.5, boxShadow: 3 }}
          >
            Hinzufügen
          </Button>
        </Paper>
      )}
    </Box>
  )
}
