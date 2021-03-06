import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Creator of Products</div>
            <div className="text-gray-500 dark:text-gray-400">Planet Earth</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hey, I'm a product enthusiast with 7 years of product experience. 2 in design, 2 as PM, 3 as VP Product. VP Product to me meant getting in the weeds in <a href='https://figma.com'>figma,</a> writing <a href='https://basecamp.com/shapeup/1.5-chapter-06'>pitches,</a> hiring engineers, working in <a href='https://amplitude.com'>amplitude,</a> occasionally pushing commits, running 5 pods, and sitting on the executive team. A wide array.
            </p>
            <p>
            <p>
              I started with a copy of photoshop
              designing flyers and print materials for Delivery Dudes.
              We needed apps so I figured out how to design them. My first apps sucked. Funny enough the first app I helped design is still in production used by thousands of delivery drivers.
            </p>
              A few years and a few more production apps later, I was dubbed the almighty role of PM. I still designed all the products. 
              Eventually the CTO of Delivery Dudes resigned and I took the helm as VP of Product. I held that position for 3 years until I resigned. 
              Delivery Dudes was acquired by WAITR in June of 2021. Post acquisition I worked with our <a href='https://kaylegishen.com'>VP Engineering</a> to put together a plan to merge Delivery Dudes, Bitesquad and Waitr tech stacks. It was similar to <a href='https://doordash.engineering/2020/09/29/caviar-web-experience-react-components/'>this one done by DoorDash and Caviar.</a>
            </p>
            <p>
              Right now I'm traveling, coding, and making YouTube videos. I am open for consulting just <a href="mailto:me@parkerrex.com?subject=Hey Parker, I saw your site and...">shoot me an email.</a>
              <p>
              Want more details? <a href='/static/images/Parker-Rex-Resume.pdf' download><b>Download my resume.</b></a>
              </p>
              <p>
                -Parker
              </p>
              <p>
                ps. Also.. did I mention <a href='https://www.youtube.com/channel/UCcuaQecz84wTuxKzr1Yxi4Q'>I make YouTube videos?</a>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
