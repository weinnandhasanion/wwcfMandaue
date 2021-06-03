import { Parallax } from 'react-parallax';
import images from './../assets/images';
import MinistryCard from './MinistryCard';

const Ministries = () => {
  const ministries = [
    {
      id: 0,
      name: 'Couples Ministry',
      description: 'A ministry for couples with a primary goal to raise up God-centered families.',
      link: ''
    },
    {
      id: 1,
      name: 'Yuppies Ministry',
      description: 'A ministry for couples with a primary goal to raise up God-centered families.',
      link: ''
    },
    {
      id: 2,
      name: 'Youth Ministry',
      description: 'A ministry for couples with a primary goal to raise up God-centered families.',
      link: ''
    },
    {
      id: 3,
      name: 'Young Teens Ministry',
      description: 'A ministry for couples with a primary goal to raise up God-centered families.',
      link: ''
    },
    {
      id: 4,
      name: 'Kids Ministry',
      description: 'A ministry for couples with a primary goal to raise up God-centered families.',
      link: ''
    },
    {
      id: 5,
      name: 'Worship Ministry',
      description: 'A ministry for couples with a primary goal to raise up God-centered families.',
      link: ''
    },
    {
      id: 6,
      name: 'Maintenance Ministry',
      description: 'A ministry for couples with a primary goal to raise up God-centered families.',
      link: ''
    },
  ];

  return (
    <div id="ministries">
      <Parallax bgImage={images.slider2} strength={300}>
        <h1>JOIN OUR MINISTRIES</h1>
        <div className="ministry-cards">
        {ministries.map(m => (
          <MinistryCard key={m.id} name={m.name} description={m.description} link={m.link} />
        ))}
        </div>
      </Parallax>
    </div>
  );
}

export default Ministries;