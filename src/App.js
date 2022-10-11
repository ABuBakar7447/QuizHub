import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
    
        {
          path: 'statistics',
          
          element:<Statistics></Statistics>
        },

        {
          path: 'blogs',
          
          element:<Blogs></Blogs>
        },

        {
          path: '/:id',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        
        
      ]
      
    },
    {
      path:'*',
      element: <div>This is not correct page You are seaching for please go back</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
