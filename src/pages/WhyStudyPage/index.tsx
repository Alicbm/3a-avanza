import AllText from "./AllText"
import FrontPage from "./FrontPage"

function WhyStudyPage () {
  const styleFrontPage = {
    background: 'linear-gradient(#090b20, #090b20, #060513)'
  }

  return (
    <div>
      <div style={styleFrontPage}>
        <FrontPage />
      </div>
      <AllText />
    </div>
  )
}

export default WhyStudyPage