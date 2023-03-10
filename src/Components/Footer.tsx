import ResetButton from "@/Components/ResetButton";

export default function Footer() {
  return(
    <footer className="max-w-6xl mx-auto my-0 text-center">
      <div className="block">
          <div className="mb-3"><ResetButton/></div>
          <div>
            <p>
              Icons created by <a href="https://illlustrations.co" target="_blank"> Vijay Verma </a>
            </p>
            <p>
              Game created by <a href="https://mn.dev" target="_blank"> Matt Norton </a>
            </p>
          </div>
        </div>
      </footer>
  )
}