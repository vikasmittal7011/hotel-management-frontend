import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Images = ({ hotel, setShowImages }) => {
    return (
        <div className=" basis-3/4">
            <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                {hotel.photos.map((image, index) => (
                    <div onClick={() => setShowImages(true)} key={index} className="aspect-h-5 aspect-w-4 cursor-pointer">
                        <img
                            src={image}
                            alt={image}
                            className="object-cover h-[470px] rounded-md"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Images
