import Layout from "../layouts/Layout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useRecoilValue } from "recoil";
import { themeState } from "../store/atoms";

export default function Index() {
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="basis-1/2 ">
          <div className=" p-8  overflow-hidden rounded border-b border-gray-200 ">
            <h6 className="text-[16px] font-bold">Plan Summary</h6>
            <table class="min-w-full bg-white my-3">
              <thead class=" bg-gray-100 text-black">
                <tr>
                  <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Last name
                  </th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr>
                  <td class="w-1/3 text-left py-3 px-4">Lian</td>
                  <td class="w-1/3 text-left py-3 px-4">Smith</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-left py-3 px-4">Emma</td>
                  <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                  <td class="w-1/3 text-left py-3 px-4">Williams</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                  <td class="w-1/3 text-left py-3 px-4">Brown</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-200 p-8 mt-4 drop-shadow-md">
            <h6 className="text-[16px] font-bold">Subscriptions Summary</h6>
            <table class="min-w-full bg-white my-3">
              <thead class=" bg-gray-100 text-black">
                <tr>
                  <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Last name
                  </th>
                  <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr>
                  <td class="w-1/3 text-left py-3 px-4">Lian</td>
                  <td class="w-1/3 text-left py-3 px-4">Smith</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-left py-3 px-4">Emma</td>
                  <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                  <td class="w-1/3 text-left py-3 px-4">Williams</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                  <td class="w-1/3 text-left py-3 px-4">Brown</td>
                  <td class="text-left py-3 px-4">
                    <a class="hover:text-blue-500" href="tel:622322662">
                      622322662
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="basis-1/2 m-4">
          <div className="bg-slate-300 p-8 drop-shadow-md">
            <div className="flex gap-4">
              <div className="basis-1/2 ">
                <div className="bg-white text-left pl-16 p-2">
                  <PersonOutlineIcon />
                  <p className="py-2 font-bold">Customers</p>
                  <p className="text-2xl font-bold">205</p>
                  <p className="pt-6 font-bold">25 new customers </p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="bg-white text-left pl-16 p-2">
                  <MonetizationOnIcon />
                  <p className="py-2 font-bold">Customers</p>
                  <p className="text-2xl font-bold">205</p>
                  <p className="pt-6 font-bold">25 new customers </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="basis-1/2">
                <div className="bg-white text-left pl-16 p-2">
                  <PersonOutlineIcon />
                  <p className="py-2 font-bold">Customers</p>
                  <p className="text-2xl font-bold">205</p>
                  <p className="pt-6 font-bold">25 new customers </p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="bg-white text-left pl-16 p-2">
                  <PersonOutlineIcon />
                  <p className="py-2 font-bold">Customers</p>
                  <p className="text-2xl font-bold">205</p>
                  <p className="pt-6 font-bold">25 new customers </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
