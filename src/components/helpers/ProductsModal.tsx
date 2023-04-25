import { Box, Button, Fade, Modal, Typography } from '@mui/material';
import { useState } from 'react';

export const styleModal = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '280px', md: 'auto' },
  minWidth: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: '20px', md: '30px' },
  borderRadius: '7px',
  overflow: 'hidden',
  height: 'auto',
  maxHeight: '80%'
};

interface ProductsModalProps {
  icon?: React.ReactNode;
  zIndex?: number;
  ordered: any;
}

const ProductsModal = (props: ProductsModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Look</Button>
      <Modal
        sx={{ zIndex: props.zIndex || 1300 }}
        disableEnforceFocus
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Fade in={open} {...{ timeout: 700 }}>
          <Box sx={styleModal}>
            <Box>
              <Typography variant="h4" color="initial">
                Products
              </Typography>
            </Box>
            {props.ordered.map((item: any) => (
              <Box display="flex" flexDirection="column" key={item.id}>
                <Typography fontSize="12px" color="initial">
                  {item.code}
                </Typography>
                <Typography fontSize="13px" color="initial">
                  {item.type}
                </Typography>
              </Box>
            ))}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ProductsModal;
