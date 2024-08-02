import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { User } from "iconsax-react";

import kerjooLogo from "@/images/company/kerjoo.png";
import assessedLogo from "@/images/company/assessed.jpeg";
import uinLogo from "@/images/company/uin.jpeg";

export default function Experiences() {
  return (
    <Card className="border p-2 sm:p-4 h-[420px]" shadow="none">
      <CardBody>
        <section className="text-gray-600 body-font">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 border inline-flex items-center justify-center text-gray-600 relative z-10">
              <Image alt="kerjoo" className="w-5" src={kerjooLogo} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Frontend Developer
              </h2>
              <p className="font-light title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Kerjoo
              </p>
              <p className="text-sm mb-1 dark:text-white">Oct 2022 - Present</p>
              <div className="text-sm [&>p]:mb-1 dark:[&>p]:text-white dark:[&>ul]:text-white [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:mb-1.5">
                <p>
                  Kerjoo is a company that provide online attendance service.
                </p>
                <p>Main Responsibilities:</p>
                <ul>
                  <li>SEO</li>
                  <li>
                    Developing new features to enhance the user experience.
                  </li>
                  <li>Maintaning and updating existing website</li>
                  <li>
                    Rewrite and redesign existing website with current
                    technologies
                  </li>
                  <li>
                    Collaboration with UI/UX Designer and Backend Developer
                  </li>
                  <li>Report to PM</li>
                  <li>Help other dev team if needed</li>
                </ul>
                <p>Project:</p>
                <ul>
                  <li>Kerjoo App (app.kerjoo.com)</li>
                  <li>Kerjoo company webiste and blog (kerjoo.com)</li>
                  <li>
                    Kerjoo utility websites (hitungbpjs.com, hitungpph21.com,
                    hitunglembur.com, Lika - CRM App)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 inline-flex items-center justify-center text-gray-600 relative z-10">
              <User size={20} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Data Scientist | ML/DL Developer
              </h2>
              <p className="font-light title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Freelance
              </p>
              <p className="text-sm mb-1 dark:text-white">
                Sep 2022 - Dec 2022
              </p>
              <div className="text-sm [&>p]:mb-1 dark:[&>p]:text-white dark:[&>ul]:text-white [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:mb-1.5">
                <p>Self employed work.</p>
                <p>Main Responsibilities:</p>
                <ul>
                  <li>Provide ML/DL development.</li>
                </ul>
                <p>Project:</p>
                <ul>
                  <li>Develop a face detection model.</li>
                  <li>Mentoring in a voice recognition project</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 inline-flex items-center justify-center text-gray-600 relative z-10">
              <Image alt="assessed" className="w-5" src={assessedLogo} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Frontend Developer
              </h2>
              <p className="font-light title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Assessed
              </p>
              <p className="text-sm mb-1 dark:text-white">
                Jan 2022 - Jun 2022
              </p>
              <div className="text-sm [&>p]:mb-1 dark:[&>p]:text-white dark:[&>ul]:text-white [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:mb-1.5">
                <p>
                  Assessed.id is a technology company that focuses on
                  professional web and mobile application development services.
                </p>
                <p>Main Responsibilities:</p>
                <ul>
                  <li>Built web application.</li>
                  <li>Developing features to enhance the user experience.</li>
                  <li>
                    Collaboration with UI/UX Designer and Backend Developer
                  </li>
                  <li>
                    Collaboration with UI/UX Designer and Backend Developer
                  </li>
                  <li>Report to PM</li>
                </ul>
                <p>Project:</p>
                <ul>
                  <li>
                    Salex - Salex is an ERP application for Pelangi mineral
                    water company located.
                  </li>
                  <li>
                    Baskara - Baskara is an E-Commerce application for Faculty
                    of Engineering in UMJ Jogjakarta.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 inline-flex items-center justify-center text-gray-600 relative z-10">
              <Image alt="uin ar-raniry" className="w-5" src={uinLogo} />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Fullstack Developer
              </h2>
              <p className="font-light title-font text-lg text-gray-900 dark:text-white tracking-wider">
                Universitas Islam Negeri (UIN) Ar-Raniry
              </p>
              <p className="text-sm mb-1 dark:text-white">
                Sep 2021 - Dec 2021
              </p>
              <div className="text-sm [&>p]:mb-1 dark:[&>p]:text-white dark:[&>ul]:text-white [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:mb-1.5">
                <p>
                  UIN Ar-Raniry is a State Islamic University in Banda Aceh. The
                  University is run under the auspices of the Ministry of
                  Religious Affairs of the Republic of Indonesia. PTIPD UIN
                  Ar-Raniry is an unit in the university that have
                  responsibilities to organize all application of technology to
                  campus information systems and databases.
                </p>
                <p>Main Responsibilities:</p>
                <ul>
                  <li>
                    Built a website according to the needs of the institution
                  </li>
                  <li>Developing front end website application.</li>
                  <li>Developing back-end website application.</li>
                  <li>
                    Worked together with System Analyst and UI/UX Designer
                  </li>
                  <li>Report to Supervisor</li>
                </ul>
                <p>Project:</p>
                <ul>
                  <li>
                    Karya Ilmiah Dosen (KID) - KID is a website google-like app
                    that provides information about all the research in the
                    university.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </CardBody>
    </Card>
  );
}
