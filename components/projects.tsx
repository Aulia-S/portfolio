import { Card, CardBody } from '@nextui-org/card'

import ProjectCard from './project-card'

import rr from '@/images/projects/ramadhan-rundown.png'
import acs from '@/images/projects/acak-surah.png'
import hrp from '@/images/projects/hariapa.png'
import kjo from '@/images/projects/kerjoo.png'
import kjoa from '@/images/projects/kerjoo-app.png'
import kjob from '@/images/projects/kerjoo-blog.png'
import ntb from '@/images/projects/notebook.png'
import pg from '@/images/projects/placegram.png'

export default function Projects() {
  return (
    <Card className='border p-2 sm:p-4 h-[420px]' shadow='none'>
      <CardBody>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

const projects = [
  {
    title: 'Kerjoo App',
    url: 'https://app.kerjoo.com/',
    image: kjoa,
  },
  {
    title: 'Kerjoo Company Profile',
    url: 'https://kerjoo.com/',
    image: kjo,
  },
  {
    title: 'Kerjoo Blog',
    url: 'https://kerjoo.com/blog/',
    image: kjob,
  },
  {
    title: 'Hariapa',
    github: 'https://github.com/Aulia-S/hariapa',
    url: 'https://hariapa.vercel.app/',
    image: hrp,
  },
  {
    title: 'Notebook',
    github: 'https://github.com/Aulia-S/notebook',
    url: 'https://aulia-notebook.vercel.app/',
    image: ntb,
  },
  {
    title: 'Ramadhan Rundown',
    github: 'https://github.com/Aulia-S/ramadhan-rundown',
    url: 'https://ramadhan-rundown.netlify.app/',
    image: rr,
  },
  {
    title: 'Placegram',
    github: [
      {
        name: 'Frontend',
        github: 'https://github.com/Aulia-S/placegram-frontend',
      },
      {
        name: 'backend',
        github: 'https://github.com/Aulia-S/placegram-backend',
      },
    ],
    url: 'https://placegram.netlify.app/',
    image: pg,
  },
  {
    title: 'Acak Surah',
    github: 'https://github.com/Aulia-S/acak-surah-juz-30',
    url: 'https://aulia-s.github.io/acak-surah-juz-30/',
    image: acs,
  },
]
