import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Routes/Routes';

function App() {
  return (
    <div className='bg-[#F1F6F8]' style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
