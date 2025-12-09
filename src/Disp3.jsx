import { useState } from "react"

const Display3 = () => {
  const [student, setStudent] = useState({
    name: "Adhi",
    gender: "Male",
    mobile: "9876543210"
  })

  function updateName() {
    setStudent((previousState) => ({
      ...previousState,
      name: "Adhi Kumar"
    }))
  }

  return (
    <>
      <h1>name: {student.name}</h1>
      <h1>gender: {student.gender}</h1>
      <h1>mobile: {student.mobile}</h1>
      <button onClick={updateName}>change name</button>
    </>
  )
}

export default Display3;
