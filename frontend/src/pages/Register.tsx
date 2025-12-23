import { useState } from "react";
import LeftImage from "../assets/leftImage.jpg";
import styles from "../styles/Register.module.css";
import { FaGoogle } from "react-icons/fa";
import SyncSpaceLogo from "../assets/SyncSpace.svg";
import { Typewriter } from 'react-simple-typewriter';
const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Hey girls");
  }
  return <>
    <div className={styles.wholeBox}>
      <div className={styles.leftPart}>
        <img src={SyncSpaceLogo} width="75px" className={styles.logo} />
        <p>
          Syncspace helps teams
          <Typewriter cursor={true} typeSpeed={30} deleteSpeed={30} loop={0} words={[' Organize Work', ' Align Priorities', ' Execute With Clarity']}>
          </Typewriter>
          <br /> and all in one place.
        </p>
        <img src={LeftImage} className={styles.leftImage} />
      </div>
      <div className={styles.rightPart}><h3>Create an account</h3>
        <form onSubmit={handleSubmit} >
          <div className={styles.inputDiv}>
            <label htmlFor="username">Name:</label><br />
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            <div className={styles.underline}></div>
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            <div className={styles.underline}></div>
          </div>

          <div className={styles.inputDiv}>
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            <div className={styles.underline}></div>
          </div>

          <button type="submit">Create Account</button>
          <button type="submit" className={styles.googleButton}>
            <FaGoogle />
            Sign up with Google
          </button>
        </form>

      </div>
    </div>
  </>
}
export default Register;
