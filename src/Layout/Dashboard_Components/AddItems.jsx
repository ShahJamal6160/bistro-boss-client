import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa6";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div>
            <SectionTitle heading="Whats New" subHeading="Add An Item"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>

                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register("name",{required: true})}
                            required
                            className="input input-bordered w-full " />

                    </div>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select {...register("category",{required: true})} className="select select-bordered w-full ">
                                <option disabled selected>Select a Cetagory</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </div>

                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("price",{required: true})}
                                className="input input-bordered w-full " />

                        </div>


                    </div>
                    <div className="form-control py-6">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>

                        </label>
                        <textarea {...register('recipe',{required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>

                    <div>
                        <input {...register('image',{required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn btn-primary my-4">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>

                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;