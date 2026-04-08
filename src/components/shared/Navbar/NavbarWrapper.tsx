import { getCookie } from "@/services/auth/tokenHandlers";
import Navbar from "./Navbar"
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getProductSortInfo } from "@/services/product/product.service";

const NavbarWrapper = async () => {
  const accessToken = await getCookie("accessToken");
  const userInfo = await getUserInfo();

  const queryString = `page=1&limit=8`;
  const allProducts = await getProductSortInfo(queryString);
  return (
    <Navbar products={allProducts?.data} accessToken={accessToken} userInfo={userInfo}></Navbar>
  )
}

export default NavbarWrapper