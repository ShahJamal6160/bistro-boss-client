
import SectionTitle from "../Components/SectionTitle";
import MenuItem from "./Shared/MenuItem";
import useMenu from "../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] =  useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular') 
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className="mb-12 ">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mb-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}>

                    </MenuItem>)
                }
            </div>
            <button className=" btn btn-outline border-0 border-b-4 m-4 ">View Menu</button>
        </section>
    );
};

export default PopularMenu;