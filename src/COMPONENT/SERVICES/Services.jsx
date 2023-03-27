import './Services.css';
import serviceData from '../../Assets/Data/ServiceData';
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
     <section className="services">
      <div className="services__container">
        <div className="services__row">
        {
          serviceData.map((item, index)=>{
            return(
          <>
          <div className="services__col">
            <motion.div  whileHover={{scale: 1.1}} className="service__item"  style={{background: `${item.bg}` }} >
              <span>
                   <i className={item.icon}/>
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </motion.div>
          </div>
              </>
            )
          })
        }
        </div>
      </div>
     </section>
    </>
  )
}

export default Services;