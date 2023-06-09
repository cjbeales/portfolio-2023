import { Splash, SplitContent, Button, ProjectsSlider, Container } from '@/components';
import Layout from '@/components/Layout';
import mediaStyles from '@/styles/utilities/media.module.scss';

export default function Home() {
  return (
    <Layout>
      <Splash backgroundImg='/hong-kong-bg.jpeg' />
      <section>
        <SplitContent
          imageSrc='/hong-kong-bg.jpeg'
          aspectClass={mediaStyles.mediaContainer__aspect1x1}
          customAspect='85'
        >
          <h2 className='margin--16'>Who we are</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a diam quis lectus iaculis auctor. Nulla id tempor augue. Morbi interdum a urna non sodales.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a diam quis lectus iaculis auctor.</p>
          <Button label={'View more'} variant='primary' href='/' />
        </SplitContent>
      </section>

      <section>
        <Container variant='large'>
          <ProjectsSlider />
        </Container>
      </section>
    </Layout>
  )
}
