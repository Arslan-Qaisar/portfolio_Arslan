import Image from "next/image"

export default function About() {
  return (
    <div id="aboutme">
    <p className="text-center font-bold text-3xl pt-10">About Me</p>
    <div className="aboutmain">
    <p className="aboutext text-lg font-semibold mr-14">As a frontend web developer, I craft exceptional digital experiences that combine creativity, functionality, and performance. With a passion for innovative problem-solving and a keen eye for detail, I build fast, responsive, and user-friendly websites that exceed client expectations. My expertise spans HTML, CSS, JavaScript, and various frameworks, with a strong focus on web performance optimization, accessibility, and collaborative development. Explore my projects to see my passion for web development in action, and let's connect to bring your vision to life!</p>


    <Image src="/about.gif" alt="Picture of the author" width={400} height={400} />
      
    </div>
    </div>
  )
}
