import {styled} from '@mui/system';
import {TextareaAutosize} from "@mui/material";


export const ChatInput = styled(TextareaAutosize)(
    ({theme}) => `
  box-sizing: border-box;  
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;  
  padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
  margin-bottom: ${theme.spacing(2)};
  border-radius: 8px;      
  background: ${theme.palette.grey[100]};
  border: 1px solid red;  
  resize: none;

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
