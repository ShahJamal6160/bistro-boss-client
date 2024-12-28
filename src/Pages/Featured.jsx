import SectionTitle from "../Components/SectionTitle";
import featuredImg from '../../src/assets/home/featured.jpg';
import  './featured.css';



const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"Featured Item"} 
                ></SectionTitle>
                <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 bt-12 px-36 text-white ">
                    <div>
                    <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where Can i Get Some?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cum quia id impedit consequatur, nemo accusamus aut veritatis minima odio illo in tempora incidunt obcaecati dolores! Quisquam quod accusamus architecto?</p>
                        <button className="btn btn-outline border-0 border-b-4 m-4 text-white">Order Now</button>
                    </div>
                </div>
        </div>
    );
};

export default Featured;