// src/components/PostCard.tsx

import {
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function PostCard({ post }: { post: any }) {
  return (
    <Card
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

      {/* Zobrazenie obrázku príspevku */}
      {post.images.length > 0 && (
        <CardMedia
          component="img"
          image={post.images[0].imageUrl}
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
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
  );
}
