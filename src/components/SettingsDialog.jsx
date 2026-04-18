import React, { useState, useEffect } from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Alert, Typography, Box
} from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import SaveIcon from '@mui/icons-material/Save'

export default function SettingsDialog({ open, products, onSave, onReset, onClose }) {
  const [json, setJson] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (open) {
      setJson(JSON.stringify(products, null, 2))
      setError('')
    }
  }, [open, products])

  const handleSave = () => {
    try {
      const parsed = JSON.parse(json)
      if (!Array.isArray(parsed)) throw new Error('Muss ein Array sein')
      onSave(parsed)
      onClose()
    } catch (e) {
      setError(`Ungültiges JSON: ${e.message}`)
    }
  }

  const handleReset = () => {
    onReset()
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { width: '80vw', maxWidth: '80vw', borderRadius: 3 } }}
    >
      <DialogTitle sx={{ fontWeight: 900, fontSize: '1.3rem' }}>⚙️ Einstellungen</DialogTitle>
      <DialogContent>
        <Typography sx={{ mb: 2, color: 'text.secondary', fontWeight: 600 }}>
          Produkte und Preise im JSON-Format bearbeiten:
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <TextField
          multiline
          fullWidth
          minRows={10}
          maxRows={20}
          value={json}
          onChange={e => { setJson(e.target.value); setError('') }}
          inputProps={{ style: { fontFamily: 'monospace', fontSize: '0.9rem' } }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
        />
        <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
          Felder: id, name, emoji, preis (ganzzahlig in €)
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
        <Button startIcon={<RestoreIcon />} onClick={handleReset} color="secondary" variant="outlined">
          Standardprodukte wiederherstellen
        </Button>
        <Box sx={{ flex: 1 }} />
        <Button onClick={onClose} variant="outlined">Abbrechen</Button>
        <Button startIcon={<SaveIcon />} onClick={handleSave} variant="contained" color="primary">
          Speichern
        </Button>
      </DialogActions>
    </Dialog>
  )
}
