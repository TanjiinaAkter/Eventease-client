import Sectiontitle from "../../../components/Sectiontitle";
// import Categorycard from "../Categorycard/Categorycard";
import "../Categorycard/Categorycard.css";
const Categories = () => {
  return (
    <div className="my-16 mx-auto w-[88%] md:w-[97%]">
      <Sectiontitle
        title={"Event Categories "}
        subtitle={"Browse our diverse event categories"}></Sectiontitle>

      <div className="">
        {/* <Categorycard></Categorycard> */}
        <div className="cards my-12 flex mx-auto w-[97%] justify-between items-center gap-4 flex-wrap">
          <div className="card  border border-[#4c4f4e]  mx-auto w-[80%] md:w-[30%] red ">
            <img
              className="w-[4rem] text-red-600"
              src="https://i.ibb.co.com/p6xmstZt/team.png"
              alt=""
            />
            <p className="tip">Corporate & Business Events</p>
          </div>
          <div className="card border border-[#4c4f4e]  mx-auto w-[80%] md:w-[30%] red ">
            <p className="tip">Hover Me</p>
          </div>
          <div className="card  border border-[#4c4f4e] mx-auto w-[80%] md:w-[30%] red ">
            <p className="tip">Hover Me</p>
          </div>
          <div className="card border border-[#4c4f4e] mx-auto w-[80%] md:w-[30%] red ">
            <p className="tip">Hover Me</p>
          </div>
          <div className="card border border-[#4c4f4e] mx-auto w-[80%] md:w-[30%] red ">
            <p className="tip">Hover Me</p>
          </div>
          <div className="card border border-[#4c4f4e] mx-auto w-[80%] md:w-[30%] red ">
            <p className="tip">Hover Me</p>
          </div>
          <div className="card border border-[#4c4f4e] mx-auto w-[80%] md:w-[30%] red ">
            <p className="tip">Hover Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
