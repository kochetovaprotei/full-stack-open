const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}


const Part = (props) => {
  console.log(props)
  return <p>{props.name} {props.number_exercises}</p>
}


const Content = (props) => {
  console.log(props)
  const name = props.course.parts.map(value => { return value.name })
  const exercises = props.course.parts.map(value => { return value.exercises })
  const parts = [name, exercises]
  return (
    <div>
      <Part name={name[0]} number_exercises={exercises[0]} />
      <Part name={name[1]} number_exercises={exercises[1]} />
      <Part name={name[2]} number_exercises={exercises[2]} />
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  const parts = props.course.parts.map(value => { return value.exercises })
 
  const total = parts[0] + parts[1] + parts[2]

  console.log(total)
  return (
    <>
      <Part name="Number of exercises" number_exercises={total} />
    </>
  )
}




const App = (props) => {
  const course = {
     name: 'Half Stack application development',
     parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
