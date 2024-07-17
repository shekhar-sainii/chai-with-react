
import './App.css'
import Card from './component/Card'


function App() {
     
  let myObj = {
    username: 'Shekhar',
    age: 24  
  };

  let myArr = [1,2,3];

  return (
   <>
   <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>tailwind CSS</h1>
   <Card username = 'Chai aur Code' btnValue = 'Click me' />
   <Card username = 'Shekhar Saini' btnValue = 'visit me' />
   </>
  )
}

{/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
<img class="w-24 h-24 rounded-full mx-auto" 
src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
<div class="pt-6 text-center space-y-4">
  <blockquote>
    <p class="text-lg font-medium">
      “Tailwind CSS is the only framework that I've seen scale
      on large teams. It’s easy to customize, adapts to any design,
      and the build size is tiny.”
    </p>
  </blockquote>
  <figcaption class="font-medium">
    <div class="text-sky-500 dark:text-sky-400">
      Sarah Dayan
    </div>
    <div class="text-slate-700 dark:text-slate-500">
      Staff Engineer, Algolia
    </div>
  </figcaption>
</div>
</figure> */}

export default App
