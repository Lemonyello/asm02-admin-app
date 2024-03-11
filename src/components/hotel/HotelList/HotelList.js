import { url_hotels_admin_all } from "../../../store/local-storage";
import styles from "./HotelList.module.css";
import { HotelListHeader, HotelListItem } from "./HotelListItem/HotelListItem";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PaginationButtons from "../../layout/PaginationButtons/PaginationButtons";

const HotelList = () => {
  const hotels = useLoaderData() ?? { docs: [] };

  const [hotelList, setHotelList] = useState(
    JSON.parse(JSON.stringify(hotels))
  );

  const loadPage = async (page) => {
    try {
      const res = await fetch(url_hotels_admin_all + "?page=" + page);

      const data = await res.json();

      setHotelList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.list}>
      <HotelListHeader />
      {hotelList.docs.map((hotel, i) => (
        <HotelListItem
          key={i}
          hotel={hotel}
          onDeleteHandler={loadPage.bind(null, 1)}
        />
      ))}
      <PaginationButtons
        onChangePage={loadPage}
        totalPages={hotelList.totalPages}
        page={hotelList.page}
      />
    </div>
  );
};

export default HotelList;
export const loader = async () => {
  try {
    const res = await fetch(url_hotels_admin_all + "?page=1");

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
