import bestSeller1 from '../images/image5.png'
import bestSeller2 from '../images/image6.png'
import bestSeller3 from '../images/image7.png'
import bestSeller4 from '../images/image8.png'
import './Bestseller.css'

const Bestseller = () => {
    return (
        <section class="best-seller">
            <div class="header">
                <h2 class="title">Best Seller</h2>
                <a href="#" class="more-link">More+</a>
            </div>
            <div class="items">
                <div class="item">
                    <img src={bestSeller1} alt="Item 1" />
                </div>
                <div class="item">
                    <img src={bestSeller2} alt="Item 2" />
                </div>
                <div class="item">
                    <img src={bestSeller3} alt="Item 3" />
                </div>
                <div class="item">
                    <img src={bestSeller4} alt="Item 4" />
                </div>
            </div>
        </section>
    )
}

export default Bestseller
