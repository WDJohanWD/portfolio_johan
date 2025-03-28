import { Card, CardContent } from "../components/Card";
import profileImage from "../assets/f1.webp";

export function About() {
  return (
    <section id="about" className="py-16 px-10 md:py-24 bg-bg-primary">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="flex justify-center">
            <div className="relative w-52 h-52 md:w-80 md:h-80 min-w-[200px] min-h-[200px] rounded-full overflow-hidden border-4 border-primary">
              <img
                src={profileImage}
                alt="Profile"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8 space-y-4">
              <p className="text-lg">
                Hello! I'm a passionate developer with a strong foundation in web development and a keen eye for
                creating engaging user experiences.
              </p>
              <p className="text-lg">
                With expertise in both frontend and backend technologies, I enjoy building complete, scalable
                applications that solve real-world problems.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
