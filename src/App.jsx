import React, { useState, useEffect, useCallback } from 'react'
import { Box } from '@mui/material'
import AppBarComponent from './components/AppBar'
import NavigationDrawer from './components/NavigationDrawer'
import ProductGrid from './components/ProductGrid'
import ShoppingList from './components/ShoppingList'
import ThankYouDialog from './components/ThankYouDialog'
import SettingsDialog from './components/SettingsDialog'
import AboutDialog from './components/AboutDialog'
import Footer from './components/Footer'
import { playBeep, playClick } from './utils/beep'

const STORAGE_KEY = 'kassen-app-products'
const TODDLER_KEY = 'kassen-app-toddler-mode'

export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [showThankYou, setShowThankYou] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [toddlerMode, setToddlerMode] = useState(() => {
    const stored = localStorage.getItem(TODDLER_KEY)
    return stored === null ? true : stored === 'true'
  })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setProducts(JSON.parse(stored))
        return
      } catch {
        // fall through to fetch
      }
    }
    fetch('/products.json')
      .then(r => r.json())
      .then(setProducts)
  }, [])

  const handleSelectProduct = useCallback((product) => {
    playClick()
    if (toddlerMode) {
      setCart(prev => {
        const existing = prev.find(i => i.id === product.id)
        if (existing) {
          return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
        }
        return [...prev, { ...product, quantity: 1 }]
      })
      return
    }
    setSelectedProduct(product)
    setQuantity(1)
  }, [toddlerMode])

  const handleAddToCart = useCallback(() => {
    if (!selectedProduct || quantity < 1) return
    setCart(prev => {
      const existing = prev.find(i => i.id === selectedProduct.id)
      if (existing) {
        return prev.map(i =>
          i.id === selectedProduct.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [...prev, { ...selectedProduct, quantity }]
    })
    setSelectedProduct(null)
    setQuantity(1)
  }, [selectedProduct, quantity])

  const handleRemoveFromCart = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }, [])

  const handlePay = useCallback(() => {
    playBeep()
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
      setCart([])
    }, 2000)
  }, [])

  const handleSaveProducts = useCallback((newProducts) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProducts))
    setProducts(newProducts)
  }, [])

  const handleToggleToddlerMode = useCallback((value) => {
    localStorage.setItem(TODDLER_KEY, String(value))
    setToddlerMode(value)
    if (value) setSelectedProduct(null)
  }, [])

  const handleResetProducts = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    fetch('/products.json')
      .then(r => r.json())
      .then(setProducts)
  }, [])

  const total = cart.reduce((sum, i) => sum + i.preis * i.quantity, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100dvh', bgcolor: 'background.default' }}>
      <AppBarComponent onMenuOpen={() => setDrawerOpen(true)} />
      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenSettings={() => { setDrawerOpen(false); setSettingsOpen(true) }}
        onOpenAbout={() => { setDrawerOpen(false); setAboutOpen(true) }}
      />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Box sx={{ width: '70%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <ProductGrid
            products={products}
            selectedProduct={selectedProduct}
            quantity={quantity}
            onSelectProduct={handleSelectProduct}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
            toddlerMode={toddlerMode}
          />
        </Box>
        <Box sx={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '2px solid',
          borderColor: 'rgba(91,140,90,0.2)',
        }}>
          <ShoppingList
            cart={cart}
            total={total}
            onRemove={handleRemoveFromCart}
            onPay={handlePay}
            toddlerMode={toddlerMode}
          />
        </Box>
      </Box>
      <Footer />
      <ThankYouDialog open={showThankYou} />
      <SettingsDialog
        open={settingsOpen}
        products={products}
        onSave={handleSaveProducts}
        onReset={handleResetProducts}
        onClose={() => setSettingsOpen(false)}
        toddlerMode={toddlerMode}
        onToggleToddlerMode={handleToggleToddlerMode}
      />
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </Box>
  )
}
