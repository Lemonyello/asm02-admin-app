import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import styles from "./EditRoomForm.module.css";
import {
  url_hotels_admin_all,
  url_rooms_admin,
  url_rooms_admin_create,
  url_rooms_admin_edit,
} from "../../../store/local-storage";

const EditRoomForm = () => {
  const [searchParams] = useSearchParams();
  const editMode = searchParams.get("edit");

  const loaderData = useLoaderData();

  const { title, desc, price, roomNumbers, maxPeople, _id } =
    loaderData[0] ?? {};

  const msg = useActionData();

  return (
    <Form method={editMode ? "PATCH" : "POST"} className={styles.form}>
      <div className="d-flex justify-content-between row">
        <div className="col-5">
          <div className={styles["form-control"]}>
            <label>Title</label>
            <input
              type="text"
              placeholder="2 bed room"
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
              defaultValue={price}
            />
          </div>
        </div>
        <div className="col-5">
          <div className={styles["form-control"]}>
            <label>Description</label>
            <input
              type="text"
              placeholder="King size bed, 1 bathroom"
              name="desc"
              defaultValue={desc}
            />
          </div>

          <div className={styles["form-control"]}>
            <label>Max people</label>
            <input
              type="number"
              placeholder="2"
              name="people"
              defaultValue={maxPeople}
            />
          </div>
        </div>
      </div>
      <div className={styles["half-below"]}>
        <div className={styles["form-control"]}>
          <label>Rooms</label>
          <textarea
            name="rooms"
            placeholder="give comma between room numbers."
            defaultValue={roomNumbers?.toString()}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Choose a hotel</label>
          <select name="hotel">
            {loaderData[1].map((hotel, i) => (
              <option key={i}>{hotel.name}</option>
            ))}
          </select>
        </div>
        <input type="hidden" defaultValue={_id} name="id" />
        <button type="submit">Send</button>
      </div>
      {msg && <p className={styles.noti}>{msg.msg}</p>}
    </Form>
  );
};

export default EditRoomForm;

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();

    const room = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      price: formData.get("price"),
      hotel: formData.get("hotel"),
      roomNumbers: formData
        .get("rooms")
        .split(",")
        .map((rn) => Number(rn)),
      maxPeople: formData.get("people"),
      roomId: formData.get("id"),
    };

    const res = await fetch(
      request.method === "POST" ? url_rooms_admin_create : url_rooms_admin_edit,
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(room),
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loader = async ({ params }) => {
  const { roomId } = params;

  try {
    const res = await Promise.all([
      roomId && fetch(url_rooms_admin + roomId),
      fetch(url_hotels_admin_all),
    ]);

    const data = await Promise.all([res[0]?.json(), res[1].json()]);

    return data;
  } catch (error) {
    console.log(error);
  }
};
