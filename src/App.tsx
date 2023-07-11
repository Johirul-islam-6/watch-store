import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { auth } from './lib/firebase';
import { useAppDispatch } from './redux/hooks';
import { setLoding, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useAppDispatch()

  useEffect( () =>{
      dispatch(setLoding(true));

      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email!))
          dispatch(setLoding(false));

         } else{
          dispatch(setLoding(false));
         }
      });



  } , [dispatch])



  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
