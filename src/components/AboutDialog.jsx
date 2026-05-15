import React from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography, Box, Divider
} from '@mui/material'

export default function AboutDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { width: '80vw', maxWidth: '80vw', borderRadius: 3 } }}
    >
      <DialogTitle sx={{ fontWeight: 900, fontSize: '1.3rem' }}>ℹ️ Über die App</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography sx={{ fontSize: '3rem' }}>🏪</Typography>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900 }}>Einkaufsladen Kassen-App</Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>Version 1.0.0</Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Typography sx={{ mb: 2, fontWeight: 600, lineHeight: 1.7 }}>
          Eine kindgerechte Kassen-App für den Spielzeug-Einkaufsladen. Kinder ab dem Alter von 3 Jahren
          können damit spielerisch das Kaufen und Bezahlen üben — gemeinsam mit einem Erwachsenen
          oder einem Geschwisterkind.
          <br/><br/>
          Der "Kleinkind-Modus" kann in den Einstellungen ausgeschaltet werden.
        </Typography>
        <Typography sx={{ mb: 2, fontWeight: 600, lineHeight: 1.7, color: 'text.secondary' }}>
          🎨 Inspiriert vom{' '}
          <Box
            component="a"
            href="https://www.kindermuseum-muenchen.de/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 800 }}
          >
            Kindermuseum München
          </Box>.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography sx={{ fontWeight: 700 }}>
          Entwickelt von{' '}
          <Box
            component="a"
            href="https://bitsynergies.de"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#0192ED', textDecoration: 'none', fontWeight: 800 }}
          >
            BitSynergies
          </Box>
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="contained">Schließen</Button>
      </DialogActions>
    </Dialog>
  )
}
