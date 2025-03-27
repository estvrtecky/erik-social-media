import { prisma } from "@/app/api/auth/[...nextauth]/prisma"; 
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";

export const metadata = { title: "Príspevky | Insta 2.0" };

export default async function FeedPage() {
  // Fetch posts s reláciami na user a images
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true, images: true }, // Zahrnutie obrázkov príspevku
  });

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Príspevky
      </Typography>

      {posts.length > 0 ? (
        posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 4,
              borderRadius: 2,
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
              },
              maxWidth: 500,
              margin: "25px auto",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Avatar
                alt={post.user.name || "User"}
                src={post.user.image || ""}
                sx={{ mr: 2, width: 40, height: 40 }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {post.user.name}
              </Typography>
            </Box>

            {/* Zobrazenie obrázku príspevku (ak existuje) */}
            {post.images.length > 0 && (
              <CardMedia
                component="img"
                image={post.images[0].imageUrl} // Zobrazenie prvého obrázku
                alt={post.caption || "Post image"}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                }}
              />
            )}

            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <ShareIcon />
                  </IconButton>
                </Box>
                <IconButton>
                  <BookmarkBorderIcon />
                </IconButton>
              </Box>

              <Typography variant="body1" sx={{ mb: 1, mt: 1 }}>
                {post.caption || "Bez popisu"}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "0.8rem" }}
              >
                Publikované: {new Date(post.createdAt).toLocaleString("sk-SK")}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Žiadne príspevky na zobrazenie.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Buďte prvý, kto zdieľa príspevok!{" "}
            <MuiLink component={NextLink} href="/pridat">
              Vytvoriť nový príspevok
            </MuiLink>
          </Typography>
        </Box>
      )}
    </Container>
  );
}
