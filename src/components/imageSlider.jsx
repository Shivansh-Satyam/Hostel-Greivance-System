import { useEffect, useState } from "react";

const images = [
  "https://vnit.ac.in/section/hostel/wp-content/uploads/2025/08/M-S-SWAMINATHAN-scaled.jpg",
  "https://vnit.ac.in/section/hostel/wp-content/uploads/2025/08/V-G-BHIDE-scaled.jpg",
  "https://vnit.ac.in/section/hostel/wp-content/uploads/2025/08/Meghnad-Saha-scaled.jpg",
];

function ImageSlider() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // clone first & last image
  const slides = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // handle infinite loop jump
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 600);
    }
  }, [index, slides.length]);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {slides.map((img, i) => (
          <img key={i} src={img} alt="Hostel" />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;