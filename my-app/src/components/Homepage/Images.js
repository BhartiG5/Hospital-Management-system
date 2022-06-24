import * as React from 'react'
import Whirligig from 'react-whirligig'

const Images = () => {
  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <Whirligig
        visibleSlides={3}
        gutter="1em"
        ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
      >
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FZG%2FMW%2FJM%2FSELLER-40306233%2Fhospital-management-software-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fhospital-management-software-20662851055.html&tbnid=wSy8jHdvwd7KEM&vet=12ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ..i&docid=K-eD6rJIBwUcQM&w=500&h=282&q=hospital%20management&ved=2ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ" />
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FZG%2FMW%2FJM%2FSELLER-40306233%2Fhospital-management-software-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fhospital-management-software-20662851055.html&tbnid=wSy8jHdvwd7KEM&vet=12ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ..i&docid=K-eD6rJIBwUcQM&w=500&h=282&q=hospital%20management&ved=2ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ "/>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FZG%2FMW%2FJM%2FSELLER-40306233%2Fhospital-management-software-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fhospital-management-software-20662851055.html&tbnid=wSy8jHdvwd7KEM&vet=12ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ..i&docid=K-eD6rJIBwUcQM&w=500&h=282&q=hospital%20management&ved=2ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ" />
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FZG%2FMW%2FJM%2FSELLER-40306233%2Fhospital-management-software-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fhospital-management-software-20662851055.html&tbnid=wSy8jHdvwd7KEM&vet=12ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ..i&docid=K-eD6rJIBwUcQM&w=500&h=282&q=hospital%20management&ved=2ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ "/>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FZG%2FMW%2FJM%2FSELLER-40306233%2Fhospital-management-software-500x500.jpg&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fhospital-management-software-20662851055.html&tbnid=wSy8jHdvwd7KEM&vet=12ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ..i&docid=K-eD6rJIBwUcQM&w=500&h=282&q=hospital%20management&ved=2ahUKEwjkm7qBgrL2AhUrUWwGHVP2BooQMygBegUIARDYAQ" />
      </Whirligig>
      <button onClick={next}>Next</button>
    </div>
  )
}
export default Images;
