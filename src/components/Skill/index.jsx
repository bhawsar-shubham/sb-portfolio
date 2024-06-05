import { backEnd, dataBase, frontEnd, tools } from "src/data/constant";

const Skill = () => {
  return (
    <>
      {/* <div className='max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20  space-y-2'> */}

      <hr />
      <section
        name="Skill"
        className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 p-4 mt-5 md:p-0 max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20  space-y-2 "
      >
        <div className="col-span-2  md:col-span-2 lg:col-span-3">
          <h1 className="text-3xl font-semibold mb-5">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* FrontEnd */}
            <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
              <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                Frontend
              </div>
              <div className="flex flex-wrap gap-2">
                {frontEnd.map(({ id, name, style }) => (
                  <div
                    key={id}
                    className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91] ${style}  `}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
            {/* backEnd */}
            <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
              <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                Backend
              </div>
              <div className="flex flex-wrap gap-2">
                {backEnd.map(({ id, name, style }) => (
                  <div
                    key={id}
                    className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91]  ${style}`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
            {/* Database */}
            <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
              <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                DataBase
              </div>
              <div className="flex flex-wrap gap-2">
                {dataBase.map(({ id, name, style }) => (
                  <div
                    key={id}
                    className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91]  ${style} `}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
            {/* Miscellaneous */}
            <div className="flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1c1b23]">
              <div className=" text-[#8b8a91] font-medium text-lg tracking-wider">
                Miscellaneous
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map(({ id, name, style }) => (
                  <div
                    key={id}
                    className={` rounded-md bg-[#14131a] text-xs p-2 text-[#8b8a91]  ${style}`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* </div> */}
    </>
  );
};

export default Skill;
