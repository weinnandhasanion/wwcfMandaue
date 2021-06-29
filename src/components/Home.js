import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import "./../css/style.scss";

const texts = [
  "A church that loves God and loves people.",
  "Connecting people to Christ and conquering the world for Jesus.",
  "Teaching people to become disciples of Christ and carry on His gospel.",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const t = setInterval(
      () => setIndex((state) => (state + 1) % texts.length),
      4000
    );

    return () => clearTimeout(t);
  }, []);

  return (
    <div id="home">
      <div className="landing"></div>
      <div className="flex-contain">
        <div className="title-cont">
          <h1 className="title">
            Bringing God's word <br /> to the world.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "6rem",
            }}
          >
            {transitions((style, i) => (
              <animated.p
                style={{
                  position: "absolute",
                  ...style,
                }}
              >
                {texts[i]}
              </animated.p>
            ))}
          </div>
          <div className="button-cont">
            <a href="#services" className="button">
              GET STARTED
            </a>
            <a href="#contact" className="button">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
