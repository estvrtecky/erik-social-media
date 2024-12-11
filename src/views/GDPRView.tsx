import { Container, Typography } from "@mui/material";
import BackButton from "@/components/BackButton";

export default function GDPRView() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        GDPR
      </Typography>
      <Typography>
        Tu budú uvedené zásady ochrany osobných údajov pre aplikáciu Insta 2.0. Prosím, prečítajte si ich pozorne.
      </Typography>
      <BackButton sx={{ mt: 4, bgcolor: "secondary.main", "&:hover": { bgcolor: "secondary.dark" } }} />
    </Container>
  );
}
