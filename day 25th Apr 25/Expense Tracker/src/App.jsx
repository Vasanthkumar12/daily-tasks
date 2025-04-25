// import './App.css'
// import { Demo } from './Demo'
import { Navbar } from './common/NavBar'
import { Button } from "@/components/ui/button"
import { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination"

function App() {

  return (
    <>
      <Navbar />
      <Button>Click me</Button>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">99</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

    </>
  )
}

export default App
