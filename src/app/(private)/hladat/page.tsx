// src/app/hladanie/page.tsx

import { Container } from "@mui/material";
import SearchView from "@/views/SearchView"; // Import the separated SearchView component

export const metadata = { title: "Hľadanie | Insta 2.0" };

export default function SearchPage() {
    return (
        <Container>
          <SearchView />
        </Container>
      );
}
