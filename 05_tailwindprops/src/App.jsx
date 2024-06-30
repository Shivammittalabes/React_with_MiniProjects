import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  // let myobj = {
  //   username: "Shivam",
  //   age: 24
  // }

  // let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
        <div class="pt-6 space-y-4">
          <blockquote>
                    <p class="text-lg font-medium">
                      “My Name is Shivam Mittal, I am learning react and tailwind under the supervision of Hitesh ch sir.”
                    </p>
          </blockquote>
          <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                      Shivam Mittal
                    </div>
                    <div>
                      Software Engineer, India
                    </div>
          </figcaption>
        </div>
      </figure> */}

      <Card username = 'Shivam' description = 'My Name is Shivam Mittal, I am learning React and Tailwind.' btnText = 'Visit Profile' />
      <Card username = 'Deepanshu' description = 'My Name is Deepanshu, I am learning React and Tailwind' btnText = 'Visit My Profile' />
      <Card username = 'Aashish' description = 'My Name is Aashish, I am learning React and Tailwind' btnText = 'Visit Portfolio' />
      <Card username = 'Sawan' description = 'My Name is Sawan, I am working and Business man'  />
      
    </>
  )
}

export default App
