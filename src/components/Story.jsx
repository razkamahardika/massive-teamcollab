import storyImg1 from '../images/image1.png'
import storyImg2 from '../images/image2.png'
import storyImg3 from '../images/image3.png'
import storyImg4 from '../images/image4.png'
import './Story.css'

const Story = () => {
    return (
        <section class="story-local-fashion">
            <div class="story-images">
                <div class="image">
                    <img src={storyImg1} alt="Fashion 1" />
                </div>
                <div class="image">
                    <img src={storyImg2} alt="Fashion 2" />
                </div>
                <div class="image">
                    <img src={storyImg3} alt="Fashion 3" />
                </div>
                <div class="image">
                    <img src={storyImg4} alt="Fashion 4" />
                </div>
            </div>
            <div class="story-text">
                <h1>The Story of A Local Fashion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue vestibulum arcu in dignissim.
                    Mauris
                    convallis vitae urna quis mattis. Nam orci libero, pulvinar eu turpis nec, sagittis tempor felis. Nunc
                    eget
                    feugiat lorem. Donec tellus justo, porttitor eu cursus cursus, pellentesque ut quam. Curabitur at arcu.
                </p>
            </div>
        </section>
    )
}

export default Story
