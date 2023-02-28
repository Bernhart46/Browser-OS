import { createRoot } from 'react-dom/client';
import DesktopComponent from './components/desktop-component';
import './index.css';

const rootElement = document.querySelector('#root') as HTMLDivElement;
const root = createRoot(rootElement);

root.render(<DesktopComponent />);
