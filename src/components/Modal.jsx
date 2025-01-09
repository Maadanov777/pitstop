import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalClose, ModalDialog } from '@mui/joy';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  overflow:'scroll',
  height:'100%',
  display:'block'

};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <div style={{position: 'sticky',
    top: '15px', marginLeft: '10px'}}>
      <Button style={{
        borderRadius: 35,
        backgroundColor: "#bb2124",
        padding: "12px 20px",
        fontSize: "12px",
        fontFamily: 'inherit',
        color: 'white',
        
    }}   onClick={handleOpen} > ПРАВИЛА КАРАОКЕ БАРА </Button>
      <Modal width={100}open={open}>
  <ModalDialog
    color="danger"
    layout="center"
    size="lg"
    variant="soft"
    height={"100"}
    style={style}
  >
  <ModalClose  style={{position: 'sticky',
     marginLeft: '95%'}}   onClick={() => setOpen(false)}
    />
          <Typography id="modal-modal-title" variant="h6" component="h2">
          ПРАВИЛА КАРАОКЕ БАРА
          </Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
        1) Песни исполняются в порядке общей очереди, по две песни от каждого стола. При исполнении
        песни соседним столиком запрещается выкрикивать, свистеть и мешать исполнению песни.
        Просим уважать друг друга!
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
    2) При уроне микрофона штраф 3000 сом, даже если микрофон целый и в рабочем состоянии (включая кабины).
    Урон микрофон повлекший его поломку 500$.
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
    3) В случае порчи гостем имущества, гость обязан возместить стоимость согласно прейскуранту цен (с прейскурантом можно ознакомиться у администрации .
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
    4) Администрация не несет ответственности за оставленные без присмотра ценные вещи.
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>

5) Администрация оставляет права выбора клиента за собой.
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>

6) Запрещается приносить с собой алкоголь, напитки и еду.
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>

7) Запрещается садиться на стол, вставать на диван ногами. 
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>

Посещение клуба запрещено лицам:
Не достигшим 18 лет, без сопровождения взрослых.
В состоянии сильного алкогольного или наркотического опьянения.
Степень которого администрация клуба определяет по своему усмотрению.
В спортивной одежде (шорты), верхней одежде (кепке), в рабочей форме (военная форма).
Агрессивно или некорректно ведущим себя по отношению к другим гостям.
</Typography>

<Typography id="modal-modal-description" sx={{ mt: 2 }}>

Предусмотрен штраф за рвотную массу.
Который устанавливает администрация на свое усмотрение.
</Typography>


</ModalDialog>
</Modal>
    </div>
  );
}