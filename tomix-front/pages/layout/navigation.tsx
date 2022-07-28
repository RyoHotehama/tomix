import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navigation = () => {

  return (
    <Stack direction="row" spacing={8} sx={{justifyContent: 'center', borderBottom: 'solid 0.5px #797979'}}>
      <Button size="large">Primary</Button>
      <Button size="large">Link</Button>
  </Stack>
  );
}
export default Navigation;