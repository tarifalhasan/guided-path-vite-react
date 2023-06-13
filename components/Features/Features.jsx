import Container from '../Container';

import icon1 from '../../src/assets/community.svg';
import icon2 from '../../src/assets/Strong.svg';
import icon3 from '../../src/assets/leadership.svg';
import icon4 from '../../src/assets/carrier.svg';
import icon5 from '../../src/assets/skilled.svg';

const FeaturesCom = () => {
  const featuresData = [
    {
      name1: 'Community',
      name2: 'Arrangement',
      icon: icon1,
    },
    {
      name1: 'Strong',
      name2: 'Networking',
      icon: icon2,
    },
    {
      name1: 'Leadership',
      name2: 'Progression',
      icon: icon3,
    },
    {
      name1: 'Career',
      name2: 'Improvement',
      icon: icon4,
    },
    {
      name1: 'Skilled',
      name2: 'Events',
      icon: icon5,
    },
  ];

  return (
    <section className="pb-5">
      <Container>
        <div>
          <h2 className=" py-5 lg:py-10 2xl:py-16 text-2xl lg:text-4xl lg:leading-[55px] text-center font-bold">
            The Drive of the Group is to Provision,
            <br className=" hidden lg:block" /> Advocate-for, and Brace the
            Community <br className=" hidden lg:block" /> System
          </h2>
          <div className="grid grid-cols-1 gap-6  lg:grid-cols-5">
            {featuresData.map((data, key) => (
              <div key={key}>
                <div className=" py-10 rounded-2xl bg-[#F5CA3D] !bg-opacity-30 w-full grid place-items-center">
                  <img
                    width={114}
                    height={116}
                    src={data.icon}
                    alt={data.name1}
                  />
                  <div className=" pt-4">
                    <h2 className=" text-center text-2xl text-black font-bold">
                      {data.name1}
                    </h2>
                    <h2 className="text-2xl text-center text-black font-bold">
                      {data.name2}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesCom;
