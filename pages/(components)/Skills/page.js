import Image from "next/image"

export default function Skills() {
  return (
    <div className="skills" id="skills">
        <p className="text-center font-bold text-4xl "> My  Skills</p>
         
         <div className="flex justify-center pt-10 text-center gap-10 row1">
         <div className="card">
         <Image src="/html.svg" alt="Picture of the author" width={90} height={90}/>
          <p className="font-bold pt-2">HTML 5</p>
         </div>
         <div className="card">
         <Image src="/css.svg" alt="Picture of the author" width={90} height={90} />
          <p className="font-bold pt-2">CSS</p>
         </div>
         <div className="card">
         <Image src="/javascript.svg" alt="Picture of the author" width={90} height={90} />
          <p className="font-bold pt-2">Javascript</p>
         </div>
         </div> 

         <div className="flex justify-center pt-10 text-center gap-10 row2">
         <div className="card">
         <Image src="/firebase.svg" alt="Picture of the author" width={90} height={90}/>
          <p className="font-bold pt-2">Firebase</p>
         </div>
         <div className="card">
         <Image src="/nextjs.svg" alt="Picture of the author" width={90} height={90} />
          <p className="font-bold pt-2">NextJs</p>
         </div>
         <div className="card">
         <Image src="/tailwind.svg" alt="Picture of the author" width={90} height={90} />
          <p className="font-bold pt-5">Tailwind</p>
         </div>
         </div> 
      
    </div>
  )
}
