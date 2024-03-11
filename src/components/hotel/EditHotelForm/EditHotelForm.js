import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import styles from "./EditHotelForm.module.css";
import {
  url_hotels_admin,
  url_hotels_admin_create,
  url_hotels_admin_edit,
} from "../../../store/local-storage";

const EditHotelForm = () => {
  const [searchParams] = useSearchParams();
  const editMode = searchParams.get("edit");

  const {
    name,
    type,
    city,
    address,
    distance,
    title,
    desc,
    cheapestPrice,
    photos,
    featured,
    rooms,
    _id,
  } = useLoaderData() ?? {};

  let msg = useActionData();

  return (
    <Form method={editMode ? "PATCH" : "POST"} className={styles.form}>
      <div className="d-flex justify-content-between row">
        <div className="col-5">
          <div className={styles["form-control"]}>
            <label>Name</label>
            <input
              type="text"
              placeholder="My Hotel"
              name="name"
              defaultValue={name}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>City</label>
            <input
              type="text"
              placeholder="New York"
              name="city"
              defaultValue={city}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Distance from City Center</label>
            <input
              type="text"
              placeholder="500"
              name="distance"
              defaultValue={distance}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              name="desc"
              defaultValue={desc}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Images</label>
            <textarea
              name="photos"
              defaultValue={photos?.toString().split(",").join("\n")}
            />
          </div>
        </div>
        <div className="col-5">
          <div className={styles["form-control"]}>
            <label>Type</label>
            <input
              type="text"
              placeholder="hotel"
              name="type"
              defaultValue={type}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Address</label>
            <input
              type="text"
              placeholder="elton st, 216"
              name="address"
              defaultValue={address}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Title</label>
            <input
              type="text"
              placeholder="The best Hotel"
              name="title"
              defaultValue={title}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Price</label>
            <input
              type="number"
              placeholder="100"
              name="price"
              defaultValue={cheapestPrice}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Featured</label>
            <select name="featured" defaultValue={featured}>
              <option>no</option>
              <option>yes</option>
            </select>
          </div>
          <input type="hidden" defaultValue={_id} name="id" />
        </div>
      </div>
      <div className={styles["form-control"]}>
        <label>Rooms</label>
        <textarea
          name="rooms"
          defaultValue={rooms
            ?.map((r) => r._id)
            .toString()
            .split(",")
            .join("\n")}
        />
      </div>
      <div className="d-flex align-items-center">
        <button type="submit">Send</button>
        {msg && <p className={styles.noti}>{msg.msg}</p>}
      </div>
    </Form>
  );
};

export default EditHotelForm;

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();

    const hotel = {
      name: formData.get("name"),
      type: formData.get("type"),
      city: formData.get("city"),
      address: formData.get("address"),
      distance: formData.get("distance"),
      title: formData.get("title"),
      desc: formData.get("desc"),
      cheapestPrice: formData.get("price"),
      photos: formData.get("photos").split("\n"),
      featured: Boolean(formData.get("featured")),
      rooms: formData.get("rooms").split("\n"),
      hotelId: formData.get("id"),
    };

    console.log(hotel);

    if (request.method === "POST") hotel.rating = 0;

    const res = await fetch(
      request.method === "POST"
        ? url_hotels_admin_create
        : url_hotels_admin_edit,
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotel),
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loader = async ({ params }) => {
  const { hotelId } = params;

  try {
    const res = await fetch(url_hotels_admin + hotelId);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
