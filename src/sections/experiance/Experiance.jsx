import './experiance.css';
import data from './data';
import Card from '../../components/card/Card';

const Experiance = () => (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
        <div className='experiance__frontend'>
        <h3>Front-End Development</h3>
          <div className="experiance__content">
            {
              data.map((item) => <Card key={item.id} className='experiance__details'>
                  <span className='experiance__card-icon'>
                    {item.icon}
                  </span>
                  <div>
                    <h4>
                      {item.title}
                    </h4>
                    <small>
                      {item.desc}
                    </small>
                  </div>
                </Card>)
            }
          </div>
        </div>
    </section>
);

export default Experiance;
