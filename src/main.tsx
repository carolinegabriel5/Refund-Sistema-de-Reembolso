import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.module.scss';
import AppRouter from './AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
