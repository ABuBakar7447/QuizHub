import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-page'>
            <div className='question-div'>
                <p className='main-question'>what is the purpose of React Router?</p>
                <p>We can create a single-page web application with navigation using React Router and dynamic, client-side routing without having to constantly refresh the page. React Router calls components using component structure, and those components display the necessary information.</p>

                <p>The flash of a white screen or blank page can be avoided by using Router or Link, which are described in more detail below. This is one method that is becoming more popular for creating a more seamless user experience. The back button and the refresh page can both be used by the user while still retaining the right display of the application thanks to react router.</p>
            </div>

            <div className='question-div'>
                <p className='main-question'>How does context API work?</p>
                <p>You only require React.createContext(). Both a customer and a provider are returned. The component known as the provider, as its name implies, gives the state to its offspring. All the components that would require that "store" will have it as their parent and it will hold the "store." A component that utilizes and consumes the state is known as a consumer. The documentation page for React has more details.</p>
            </div>

            <div className='question-div'>
                <p className='main-question'>Details about useref in react js?</p>
                <p>Between renderings, you can maintain values using the useRef Hook.It can be used to hold a mutable value that, when altered, doesn't require a new rendering.It can be applied to directly access a DOM element.
                </p>
                
                <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.
                </p>
            </div>
        </div>
    );
};

export default Blogs;