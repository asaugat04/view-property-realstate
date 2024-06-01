export default function Component() {
  return (
    <div className="bodySection w-full ">
      <h1 className=" border-b-2 w-full text-2xl text-bold pt-4 pl-2 pb-2">
        VIEW PROPERTY
      </h1>
      <div className="showPropertyDetails rounded p-5 flex flex-col shadow-md">
        <div className="propertyDetails flex flex-row gap-8">
          <table className="table-auto w-full border-spacing-y-4">
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Property Title
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">
                Department Store
              </td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Property Type
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">
                Commercial property
              </td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Price
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">$1200</td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold flex">
                Amenities
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 ">
                <div className="flex flex-row gap-3 mr-3 md:w-10/12 flex-wrap 	">
                  <p className=" rounded-lg p-1 px-2 text-white bg-blue-800 hover:bg-blue-700 text-xs">
                    Customer Service Desk
                  </p>
                  <p className=" rounded-lg p-1 px-2 text-white bg-blue-800 hover:bg-blue-700 text-xs">
                    Restrooms
                  </p>
                  <p className=" rounded-lg p-1 px-2 text-white bg-blue-800 hover:bg-blue-700 text-xs">
                    Storage Room
                  </p>
                  <p className=" rounded-lg p-1 px-2 text-white bg-blue-800 hover:bg-blue-700 text-xs">
                    Office Space
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Parking
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 ">Garage</td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Building Area
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">1000 sq.ft</td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Property Address
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">
                California, USA
              </td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                No. of Bathrooms
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">10</td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                No. of Bedrooms
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">5</td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Furnish Type
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">
                Wall shelving
              </td>
            </tr>
            <tr>
              <td className="mr-5 pr-10 whitespace-nowrap py-1 font-bold">
                Build year
              </td>
              <td className="mr-5 pr-10 whitespace-nowrap py-1">2020</td>
            </tr>
          </table>
        </div>
        <div className="propertyDescription py-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at
          similique et reprehenderit pariatur, tempore fuga odio, mollitia
          voluptatum vel eos aperiam inventore, magnam tempora recusandae.
          Itaque optio debitis incidunt?
        </div>
        <div className="propertyImages flex flex-row justify-center gap-5 flex-wrap">
          <img
            src="https://picsum.photos/200/300"
            className="object-cover w-full  md:max-h-[100px] aspect-video md:max-w-[200px] rounded-lg"
          />
          <img
            src="https://picsum.photos/200/300"
            className="object-cover w-full  md:max-h-[100px] aspect-video md:max-w-[200px] rounded-lg"
          />
          <img
            src="https://picsum.photos/200/300"
            className="object-cover w-full  md:max-h-[100px] aspect-video md:max-w-[200px] rounded-lg"
          />
          <img
            src="https://picsum.photos/200/300"
            className="object-cover w-full  md:max-h-[100px] aspect-video md:max-w-[200px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
