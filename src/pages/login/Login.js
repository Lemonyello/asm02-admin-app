import { Form, json, redirect, useActionData } from "react-router-dom";
import styles from "./Auth.module.css";
import { url_admin_login } from "../../store/local-storage";

const Login = () => {
  const actionData = useActionData();

  return (
    <>
      <Form method="POST" className={styles.form}>
        <h1>Login</h1>
        <p>Username: Admin1</p>
        <p>Password: 123456</p>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {actionData && <p>{actionData.msg}</p>}
      </Form>
    </>
  );
};

export default Login;

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();

    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const res = await fetch(url_admin_login, {
      headers: {
        "Content-Type": "application/json",
      },
      method: request.method,
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) return data;

    return redirect("/home");
  } catch (error) {
    console.log(error);
  }
};
