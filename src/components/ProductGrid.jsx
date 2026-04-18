import React from 'react'
import { Box, Grid, Paper, Button, Typography } from '@mui/material'
import ProductButton from './ProductButton'
import QuantityInput from './QuantityInput'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

export default function ProductGrid({ products, selectedProduct, quantity, onSelectProduct, onQuantityChange, onAddToCart }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', p: 1.5 }}>
        <Grid container spacing={1.5}>
          {products.map(product => (
            <Grid item xs={4} key={product.id}>
              <ProductButton
                product={product}
                selected={selectedProduct?.id === product.id}
                onClick={() => onSelectProduct(product)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {selectedProduct && (
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
