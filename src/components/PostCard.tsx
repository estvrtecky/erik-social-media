// src/components/PostCard.tsx

"use client";

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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

import Caption from "./post/Caption";
import Timestamp from "./post/Timestamp";
import { Post } from "@/types/post";

export default function PostCard({ post }: { post: Post }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < post.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const imageUrl = post.images?.[currentImageIndex]?.imageUrl;

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
      }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar
          alt={post.user.name || "User"}
          src={post.user.image || ""}
          sx={{ mr: 2, width: 40, height: 40 }}
        />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}>
          {post.user.name}
        </Typography>
      </Box>

      {/* Zobrazenie obrázku príspevku */}
      {imageUrl ? (
        <CardMedia
          component="img"
          image={imageUrl} // Tu použijeme imageUrl
          alt={post.caption || "Post image"}
          sx={{
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "300px",
            backgroundColor: "grey.300",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            variant="body2"
            color="textSecondary">
            No image available
          </Typography>
        </Box>
      )}

      {/* Ak je viac ako jeden obrázok, pridáme navigáciu */}
      {post.images?.length > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <IconButton
            onClick={prevImage}
            disabled={currentImageIndex === 0}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography sx={{ alignSelf: "center" }}>
            {currentImageIndex + 1} / {post.images.length}
          </Typography>
          <IconButton
            onClick={nextImage}
            disabled={currentImageIndex === post.images.length - 1}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
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

        <Caption
          username={post.user.name}
          caption={post.caption || "Bez popisu"}
        />
        <Timestamp date={post.createdAt} />
      </CardContent>
    </Card>
  );
}
