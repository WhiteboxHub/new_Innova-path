export const metadata = {
  title: ' Innovapath',
  description: 'Page description',
}

import Hero from './hero'
import Stats from '@/components/stats'
import Content from './content'
import RelatedStories from '@/components/related-stories'

export default function WallOfLoveSingle() {
  return (
    <>
      <Hero />
      <Stats />
      <Content />
      <RelatedStories />
    </>
  )
}
