type WelcomeProps = {
  name: string
}

function Welcome(props: WelcomeProps) {
  return (
    <>
      <h2>Welcome {props.name}!</h2>
      <p>Let's build our AI Project Management Platform.</p>
    </>
  )
}

export default Welcome