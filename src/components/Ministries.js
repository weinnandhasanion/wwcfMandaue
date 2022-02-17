import { Parallax } from "react-parallax";
import images from "./../assets/images";
import yuppies from "./../assets/yuppies.jpg";
import MinistryCard from "./MinistryCard";

const Ministries = () => {
  const ministries = [
    {
      id: 0,
      name: "Couples Ministry",
      description:
        "A ministry for couples with a primary goal to raise up God-centered families.",
      link: "",
      img: null,
      alt: "couples",
    },
    {
      id: 1,
      name: "Yuppies Ministry",
      description:
        "Are you a young professional who wants to know God's plan for your life? We are ministering to young professionals in our yuppies ministry, teaching them of what God wants them to be!",
      link: "",
      img: yuppies,
      alt: "yuppies",
    },
    {
      id: 2,
      name: "Youth Ministry",
      description:
        "We believe that the youth is the hope for tomorrow. We aim to raise a generation of youth believers with a burning desire to make disciples for Jesus!",
      link: "",
      img: null,
      alt: "youth",
    },
    {
      id: 3,
      name: "Young Teens Ministry",
      description: "A",
      link: "",
      img: null,
      alt: "young-teens",
    },
    {
      id: 4,
      name: "Kids Ministry",
      description:
        "A ministry for couples with a primary goal to raise up God-centered families.",
      link: "",
      img: null,
      alt: "kids",
    },
    {
      id: 5,
      name: "Worship Ministry",
      description:
        "A ministry for couples with a primary goal to raise up God-centered families.",
      link: "",
      img: null,
      alt: "worship",
    },
    {
      id: 6,
      name: "Maintenance Ministry",
      description:
        "A ministry for couples with a primary goal to raise up God-centered families.",
      link: "",
      img: null,
      alt: "maintenance",
    },
  ];

  return (
    <div id="ministries">
      <Parallax bgImage={images.slider2} strength={300}>
        <h1>JOIN OUR MINISTRIES</h1>
        <div className="ministry-cards">
          {ministries.map((ministry, i) => (
            <MinistryCard key={`${ministry.name}-${i}`} details={ministry} />
          ))}
          <div style={{ width: "1px", height: "1px", flex: "0 0 auto" }}></div>
        </div>
      </Parallax>
    </div>
  );
};

export default Ministries;
