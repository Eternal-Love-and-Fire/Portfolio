import { WorkCard } from '../../entities'

import { Wrapper } from '../../shared'

export const Works = () => {
  return (
    <Wrapper>
        <div className='flex flex-wrap justify-around'>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
            <WorkCard title='Frontend Developer' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' technologies={['JS', 'HTML', 'CSS']}/>
        </div>
    </Wrapper>
  )
}
