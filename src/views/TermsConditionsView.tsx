import { Container, Typography } from "@mui/material";
import BackButton from "@/components/BackButton";

export default function TermsConditionsView() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Podmienky používania
      </Typography>
      <Typography>
        Tu budú uvedené podmienky používania aplikácie Insta 2.0. Prosím, prečítajte si ich
        pozorne.
      </Typography>
      <BackButton sx={{ mt: 4, bgcolor: "secondary.main", "&:hover": { bgcolor: "secondary.dark" } }} />
    </Container>
  );
}
