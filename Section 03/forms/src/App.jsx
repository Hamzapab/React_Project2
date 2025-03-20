import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
/**
 * Challenge: add another label and input for the password field
 */

 function App() {
// Old Method 

  // function handleSubmit(event){
  //   event.preventDefault()
  //   let target = event.currentTarget;
  //   let data = new FormData(target);
  //   let email = data.get("email")
  //   console.log(email)
  // }

  // New Method ( remove method=POS)


  // function handleSubmit(formData){
  //   let email = formData.get("email")
  //   console.log(email)
  //   let gender = formData.get("gender")
  //   console.log(gender)
  //   let mos = formData.get("MOS")
  //   console.log(mos)
  //   let favColor = formData.get("favColor")
  //   console.log(favColor)
  // }


  //  Object.FromEntries()

  function handleSubmit(formData){
    let data = Object.fromEntries(formData)
    console.log(data)
    let Mos = formData.getAll("MOS");
    console.log(Mos)
    let allData =  {
      ...data,
      MOS:Mos
    }
    console.log(allData)
  }
  return (
    <section>
      <h1>Signup form</h1>
      <form action={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <label htmlFor="pwd">Password:</label>
        <input
          id="pwd"
          type="password"
          name="password"
          placeholder="password"
        />
        <label htmlFor="descr"></label>
        <textarea name="descreption" id="descreption"></textarea>
        <fieldset>
          <legend>Choose Your Gender</legend>
          <label htmlFor="male">
            <input type="radio" name="gender" id=""  value="Male"/>
            Male
          </label>
          <label htmlFor="male">
            <input type="radio" name="gender" id="" Value="Female" />
            Female
          </label>
        </fieldset>
        <fieldset>
          <legend>Mode of Study</legend>
          <label htmlFor="male">
            <input type="checkbox" name="MOS" value="Full time" id="" />
            Full Time
          </label>
          <label htmlFor="male">
            <input type="checkbox" name="MOS" value="Part time" id="" defaultChecked={true} />
            Part Time
          </label>
        </fieldset>
        <label htmlFor="favColor" >Choose Your FAV Color</label>
        <select id="favColor" name="favColor" required>
          <option value="">-- Choose a Color --</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);