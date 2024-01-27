import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ExamsResultPage ({ children }: Props) {
  return (
    <div>
      { children }
    </div>
  )
}

export default ExamsResultPage