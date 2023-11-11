import { useState } from 'react';
import { IconSettings } from '@tabler/icons-react';
import { IconSettings2 } from '@tabler/icons-react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <section className="w-[vw-100] h-[vh-100] bg-sky-500 flex flex-wrap p-4 items-center justify-center gap-3">
        <h3 className="font-mono bg-red-400 w-60 rounded-2xl p-3 hover:bg-red-700 flex justify-center items-center gap-2 text-white"> <IconSettings2 /> Soy un titulo </h3>
        <p className="text-white text-left w-[720px] bg-emerald-600 p-3 rounded-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure iusto odio earum dicta perferendis libero adipisci blanditiis provident numquam. Neque facilis, rerum omnis ipsum magni facere repellat ut porro eius inventore minus blanditiis in obcaecati a veritatis, perspiciatis aperiam dolores tenetur distinctio illum dicta repellendus dignissimos odio nihil. Mollitia iste obcaecati ullam animi quod natus deleniti blanditiis aliquid necessitatibus modi earum, architecto rerum accusantium consectetur facilis. Quasi ex non, recusandae aperiam natus corporis dolor eius, quaerat debitis possimus voluptatem. Nulla eius dolorum at eveniet vitae, quae, blanditiis sint est assumenda id corrupti nisi quo numquam debitis reprehenderit voluptates voluptatibus necessitatibus consectetur! Corrupti minima ab veniam beatae explicabo porro modi aliquid id, provident deserunt cupiditate? Dolore optio ea, aspernatur unde necessitatibus vero dignissimos provident ullam eum exercitationem. Exercitationem pariatur itaque libero eos quia esse vitae autem quibusdam molestias, laboriosam impedit ad recusandae aperiam sequi temporibus aspernatur? At explicabo nobis laboriosam assumenda maxime cupiditate quas, reprehenderit quaerat qui ab voluptate nesciunt, natus ex expedita mollitia amet! Veritatis cum quidem libero magni optio dolorem non aliquid nihil dolores veniam esse ipsum in, nobis voluptates similique et voluptas deleniti incidunt? Distinctio molestias voluptate incidunt dicta enim ut eaque, fugiat unde dolores dolorum architecto velit optio soluta animi aliquam, sapiente rerum minima? Quasi nostrum exercitationem aliquam omnis architecto repellat ex, praesentium illo, accusamus, pariatur iure labore asperiores corrupti ad? In, omnis! Natus quod doloremque voluptates perspiciatis alias ea rerum aliquid ratione explicabo rem. Voluptatibus, accusantium? Porro excepturi sunt labore perspiciatis. Officiis veniam obcaecati quidem ducimus maiores, nostrum possimus asperiores illum cupiditate dolorem eum rem saepe, cumque et magni assumenda! Qui voluptate fugit voluptatibus corrupti officia pariatur officiis, obcaecati recusandae veniam eveniet repudiandae earum provident soluta quae mollitia accusamus deserunt ab porro quos? Numquam voluptatum, nemo dolore non quisquam provident veniam. Voluptate repellat laboriosam tenetur?
        </p>
      </section> */}

      <section className="flex flex-row gap-[10px]">
        <div className="bg-sky-950 h-[400px] p-[10px] rounded-lg m-[10%] text-white p-[35px]">
          <h2 className="font-bold text-4xl pb-[15px]">Titulo de la publicación</h2>
          <p className='font-serif pb-[15px]'>Descripcion de la publicación</p>
          <div className='border-white border-[1px] w-[100%] h-[30%] flex items-center'>
            <div className='bg-white w-[123px] h-[90%]'></div>
          </div>
          <p className='text-sm mt-10'>Ver comentarios...</p>
        </div>
      </section>
    </>
  )
}

export default App
