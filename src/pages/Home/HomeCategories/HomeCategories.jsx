import Sectiontitle from "../../../components/Sectiontitle";
import useCategories from "../../../hooks/useCategories";
// import Categorycard from "../Categorycard/Categorycard"; HomeCategories
import "../Categorycard/Categorycard.css";
const HomeCategories = () => {
  const [categories] = useCategories();
  console.log(categories);
  return (
    <div className=" bg-[#0a1316] mx-auto w-[88%]  md:w-full">
      <Sectiontitle
        title={"Event Categories "}
        subtitle={"Browse our diverse event categories"}></Sectiontitle>

      <div className="">
        {/* <Categorycard></Categorycard> */}
        <div className="cards flex mx-auto w-[97%] justify-between items-center gap-4 flex-wrap">
          {categories.map((category) => (
            <div
              key={category._id}
              className="card  border border-[#4c4f4e]  mx-auto w-[80%] md:w-[30%] red ">
              <img
                className="w-[4rem] text-red-600"
                src={category.categoryicon}
                alt=""
              />
              <p className="tip">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
